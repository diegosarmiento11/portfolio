import React from "react";

import Navbar from "../../components/homeComponents/Navbar";
import Hero from "../../components/homeComponents/Hero";
import AboutMe from "../../components/homeComponents/AboutMe";

import Projects from "../../components/homeComponents/Projects";
import Footer from "../../components/homeComponents/Footer";

function MainPage() {
  return (
    <>
      <div className="bg-gradient-to-t from-purple-800  to-blue-600 ">
        <Navbar />
        <Hero />
      </div>
      <Projects />
      <AboutMe />
      <Footer />
    </>
  );
}

export default MainPage;
