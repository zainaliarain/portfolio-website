import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Skills from "./Components/Skills/Skills";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import ContactMe from "./Components/ContactMe/ContactMe";
function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Hero />
        <Skills />
        <WorkExperience />
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
