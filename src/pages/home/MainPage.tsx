import Navbar from "../../components/homeComponents/Navbar";
import Hero from "../../components/homeComponents/Hero";
import AboutMe from "../../components/homeComponents/AboutMe";

import Projects from "../../components/homeComponents/Projects";
import Footer from "../../components/homeComponents/Footer";

const MainPage = () => {
  return (
    <>
      <div className="ds-bg-gradient">
        <Navbar />
        <Hero />
      </div>
      <Projects />
      <AboutMe />
      <Footer />
    </>
  );
};

export default MainPage;
