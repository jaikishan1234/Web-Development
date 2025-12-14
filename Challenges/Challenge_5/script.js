const API_KEY = "feb59128accc4e93ac9141404251312"; // <--- PASTE YOUR API KEY HERE
const BASE_URL = "https://api.weatherapi.com/v1/forecast.json";

// --- STATE ---
let isMetric = true;
let weatherData = null;
let uvChart, windChart;

const cityInput = document.getElementById("city-input");

// --- TABS ---
function switchTab(tabName) {
  document
    .querySelectorAll(".nav-item")
    .forEach((item) => item.classList.remove("active"));
  document.querySelectorAll(".view-section").forEach((view) => {
    view.style.display = "none";
    view.classList.remove("active-view");
  });

  if (tabName === "dashboard") {
    document.querySelector(".nav-item:nth-child(2)").classList.add("active");
    const view = document.getElementById("dashboard-view");
    view.style.display = "grid";
    view.classList.add("active-view");
  } else if (tabName === "map") {
    document.querySelector(".nav-item:nth-child(3)").classList.add("active");
    const view = document.getElementById("map-view");
    view.style.display = "block";
    view.classList.add("active-view");
  }
}

function toggleUnits() {
  isMetric = !isMetric;
  const toast = document.getElementById("toast");
  toast.textContent = `Switched to ${isMetric ? "Celsius" : "Fahrenheit"}`;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
  if (weatherData) updateUI(weatherData);
}

// --- INITIALIZE APEX CHARTS ---
function initCharts() {
  // 1. UV Index (Radial Gauge) - FIXED FORMATTING
  const uvOptions = {
    series: [0],
    chart: { type: "radialBar", height: 180, offsetY: -15 },
    colors: ["#4dabf7"],
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: { background: "#333", strokeWidth: "97%", margin: 5 },
        dataLabels: {
          name: { show: false },
          // FIXED: Formatter ensures value is always short (e.g. 5.5)
          value: {
            offsetY: -5,
            fontSize: "20px",
            color: "#fff",
            fontWeight: 600,
            formatter: function (val) {
              return val;
            }, // Returns simple number initially
          },
        },
      },
    },
    labels: ["UV"],
  };
  uvChart = new ApexCharts(document.querySelector("#uv-chart"), uvOptions);
  uvChart.render();

  // 2. Wind (Area Spline)
  const windOptions = {
    series: [{ name: "Wind", data: [5, 10, 8, 15, 12, 18, 14] }],
    chart: {
      type: "area",
      height: 100,
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    stroke: { curve: "smooth", width: 2 },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    colors: ["#4dabf7"],
    tooltip: { theme: "dark", x: { show: false } },
  };
  windChart = new ApexCharts(
    document.querySelector("#wind-chart"),
    windOptions
  );
  windChart.render();
}

// --- FETCH DATA ---
async function fetchWeather(city) {
  try {
    if (!API_KEY || API_KEY === "YOUR_API_KEY_HERE")
      throw new Error("Please paste your API Key!");
    const res = await fetch(
      `${BASE_URL}?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`
    );
    if (!res.ok) throw new Error("City not found");
    const data = await res.json();
    weatherData = data;
    updateUI(data);
  } catch (error) {
    alert(error.message);
  }
}

// --- UPDATE UI ---
function updateUI(data) {
  const current = data.current;
  const loc = data.location;
  const forecast = data.forecast.forecastday;
  const unit = isMetric ? "°C" : "°F";

  document
    .querySelectorAll(".temp-unit")
    .forEach((el) => (el.textContent = unit));

  // Main Card
  document.getElementById(
    "location-name"
  ).textContent = `${loc.name}, ${loc.country}`;
  document.getElementById("current-date").textContent = loc.localtime;
  document.getElementById("current-temp").textContent = isMetric
    ? Math.round(current.temp_c)
    : Math.round(current.temp_f);
  document.getElementById("condition-text").textContent =
    current.condition.text;
  document.getElementById("main-icon").src = "https:" + current.condition.icon;

  // Highlights
  document.getElementById("wind-speed").textContent = isMetric
    ? current.wind_kph
    : current.wind_mph;
  document.querySelector(".hl-unit").textContent = isMetric ? "km/h" : "mph";
  document.getElementById("sunrise").textContent = forecast[0].astro.sunrise;
  document.getElementById("sunset").textContent = forecast[0].astro.sunset;
  document.getElementById("humidity").textContent = current.humidity;
  document.getElementById("visibility").textContent = isMetric
    ? current.vis_km
    : current.vis_miles;
  document.getElementById("feels-like").textContent = isMetric
    ? Math.round(current.feelslike_c)
    : Math.round(current.feelslike_f);

  // Update Charts
  // FIXED: Added .toFixed(1) here to force 1 decimal place (e.g. "5.5" instead of "0.9090...")
  const uvValue = current.uv;
  uvChart.updateOptions({
    plotOptions: {
      radialBar: {
        dataLabels: {
          value: {
            formatter: function () {
              return uvValue.toFixed(1);
            },
          },
        },
      },
    },
  });
  // Calculate percentage for bar fill (scale 0-11)
  const uvPercentage = Math.min((uvValue / 11) * 100, 100);
  uvChart.updateSeries([uvPercentage]);

  // Update Wind Chart
  const baseSpeed = current.wind_kph;
  windChart.updateSeries([
    {
      data: [
        baseSpeed - 2,
        baseSpeed + 1,
        baseSpeed - 1,
        baseSpeed + 3,
        baseSpeed,
        baseSpeed - 2,
        baseSpeed,
      ],
    },
  ]);

  // Forecast List
  const forecastContainer = document.getElementById("forecast-list");
  forecastContainer.innerHTML = "";

  forecast.forEach((day) => {
    const date = new Date(day.date);
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    const max = isMetric
      ? Math.round(day.day.maxtemp_c)
      : Math.round(day.day.maxtemp_f);
    const min = isMetric
      ? Math.round(day.day.mintemp_c)
      : Math.round(day.day.mintemp_f);

    forecastContainer.innerHTML += `
      <div class="forecast-item">
        <div class="f-day">${dayName}</div>
        <div class="f-icon"><img src="https:${day.day.condition.icon}" width="25"></div>
        <div class="f-temp">${max}${unit} <span style="color:#555; font-size: 0.9em">/${min}${unit}</span></div>
      </div>`;
  });
}

// Init
initCharts();
cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") fetchWeather(cityInput.value);
});
fetchWeather("London");
