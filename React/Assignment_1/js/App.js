import { Navbar } from "./Navbar.js";
import { Hero } from "./Hero.js";

const App = () => React.createElement("main", null, React.createElement(Hero), React.createElement(Navbar));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(React.createElement(App));
