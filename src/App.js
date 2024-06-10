import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Skills from "./Components/Skills/Skills";
function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Hero />
        <Skills />
      </div>
    </div>
  );
}

export default App;
