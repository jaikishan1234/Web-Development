import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Services from "./components/Services";
import Divider from "./components/divider";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutSection />
      <Divider />
      <Services />
    </div>
  );
};

export default App;
