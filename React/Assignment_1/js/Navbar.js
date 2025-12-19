export function Navbar () {
    return React.createElement(
        "nav", 
        {className: "nav"},
        
        React.createElement(
            "div",
            { className: "nav-left" },
            React.createElement("img", 
                { className: "logo",  src: "./image/wolf.png", alt: "Wolf logo"} ),
                React.createElement(
                "ul",
                null,
                React.createElement("li", null, "About Me"),
                React.createElement("li", null, "Portfolio"),
                React.createElement("li", null, "Services"),
                React.createElement("li", null, "Blog")
            )
        ),

        React.createElement(
            "div",
            { className: "nav-right" },
            React.createElement("div", {className: "call"}, "Book A Call"),
            React.createElement("i", { className: "ri-arrow-right-up-line" }),
        )
    );
}