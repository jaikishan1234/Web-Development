// 1. The Data Source (Simulating a Database/API response)
const jobs = [
  {
    company: "Amazon",
    logoIcon: "fa-amazon", // Using FontAwesome classes for logos
    logoColor: "#000000",
    postedTime: "5 days ago",
    title: "Senior UI/UX Designer",
    tags: ["Part-Time", "Senior Level"],
    salary: "$120/hr",
    location: "Mumbai, India",
    isSaved: false,
  },
  {
    company: "Google",
    logoIcon: "fa-google",
    logoColor: "#DB4437",
    postedTime: "30 days ago",
    title: "Graphic Designer",
    tags: ["Part-Time", "Flexible Schedule"],
    salary: "$150-220k",
    location: "Kochi, India",
    isSaved: true,
  },
  {
    company: "Dribbble",
    logoIcon: "fa-dribbble",
    logoColor: "#EA4C89",
    postedTime: "18 days ago",
    title: "Senior Motion Designer",
    tags: ["Contract", "Remote"],
    salary: "$85/hr",
    location: "Chennai, India",
    isSaved: false,
  },
  {
    company: "Figma",
    logoIcon: "fa-figma",
    logoColor: "#F24E1E",
    postedTime: "5 days ago",
    title: "UX Designer",
    tags: ["Full-Time", "In office"],
    salary: "$200-250k",
    location: "Bangalore, India",
    isSaved: true,
  },
  {
    company: "Airbnb",
    logoIcon: "fa-airbnb",
    logoColor: "#FF5A5F",
    postedTime: "5 days ago",
    title: "Junior UI/UX Designer",
    tags: ["Contract", "Remote"],
    salary: "$100/hr",
    location: "Delhi, India",
    isSaved: false,
  },
  {
    company: "Apple",
    logoIcon: "fa-apple",
    logoColor: "#000000",
    postedTime: "5 days ago",
    title: "Graphic Designer",
    tags: ["Full-Time", "Flexible Schedule"],
    salary: "$85-120k",
    location: "Kerala, India",
    isSaved: true,
  },
];

// 2. Select the container
const container = document.getElementById("job-container");

// 3. Function to generate HTML for tags
const generateTags = (tags) => {
  return tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
};

// 4. Render Function
const renderJobs = () => {
  container.innerHTML = ""; // Clear existing content

  jobs.forEach((job) => {
    // Determine save icon state
    const saveIconClass = job.isSaved
      ? "fa-solid fa-bookmark"
      : "fa-regular fa-bookmark";
    const savedText = job.isSaved ? "Saved" : "Save";
    const savedClass = job.isSaved ? "saved" : "";

    // Create Card HTML
    const cardHTML = `
            <div class="job-card">
                <div class="card-top">
                    <div class="card-header">
                        <div class="company-logo" style="color: ${
                          job.logoColor
                        }; background: #f9fafb;">
                            <i class="fab ${job.logoIcon}"></i>
                        </div>
                        <button class="save-btn ${savedClass}">
                            ${savedText} <i class="${saveIconClass}"></i>
                        </button>
                    </div>
                    
                    <div>
                        <span class="company-name">${job.company}</span>
                        <span class="posted-time">${job.postedTime}</span>
                    </div>
                    
                    <h3 class="job-title">${job.title}</h3>
                    
                    <div class="tags-container">
                        ${generateTags(job.tags)}
                    </div>
                </div>

                <div class="card-footer">
                    <div class="salary-box">
                        <h4>${job.salary}</h4>
                        <p class="location">${job.location}</p>
                    </div>
                    <button class="apply-btn">Apply now</button>
                </div>
            </div>
        `;

    // Append to container
    container.innerHTML += cardHTML;
  });
};

// Run the function
renderJobs();
