export function Hero() {
  return React.createElement(
    "section",
    { className: "hero" },

    React.createElement(
      "div",
      { className: "hero-wrapper" },

      // LEFT (arrow / vertical text)
      React.createElement(
        "div",
        { className: "hero-left" },
        React.createElement("span",{ className: "vertical-text" },"Product designer"),

        React.createElement("div", { className: "vertical-line" }),

        React.createElement("span", { className: "vertical-text" }, "2024")
      ),

      // CENTER (main content)
      React.createElement(
        "div", 
        { className: "hero-center" },
        React.createElement(
            "div",
            { className: "stats" },

            React.createElement(
            "div",
            { className: "stat" },
            React.createElement("h3", null, "+200"),
            React.createElement("p", null, "Project completed")
            ),

            React.createElement(
            "div",
            { className: "stat" },
            React.createElement("h3", null, "+50"),
            React.createElement("p", null, "Startup raised")
            )
        ),
            // TITLE
            React.createElement(
                "h1",
                { className: "hero-title" },
                    "Hello", React.createElement(
                    "p",
                    { className: "hero-subtitle" },
                    "— It's D.Nova a design wizard"
                ),
            ),

            
            // SCROLL
            React.createElement(
                "span",
                { className: "scroll" },
                "Scroll down" , 
                React.createElement("i", { className: "ri-arrow-down-line" }),
            )
        ),

        // RIGHT (image)
        React.createElement(
            "div",
            { className: "hero-right" },
            React.createElement("img", {
                className: "hero-image",
                src: "./image/men.webp",
                alt: "Portrait"
            })
        )
    )
  );
}
