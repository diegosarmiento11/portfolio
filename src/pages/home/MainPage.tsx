import Navbar from "../../components/homeComponents/Navbar";
import Hero from "../../components/homeComponents/Hero";

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
      <Footer />
    </>
  );
};

export default MainPage;
