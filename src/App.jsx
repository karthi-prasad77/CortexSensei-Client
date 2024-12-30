import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import MissionVision from "./Components/MissionVision";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <About />
        <MissionVision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
