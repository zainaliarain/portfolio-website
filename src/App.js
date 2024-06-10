import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Skills from "./Components/Skills/Skills";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Hero />
        <Skills />
        <WorkExperience />
      </div>
    </div>
  );
}

export default App;
