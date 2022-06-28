import Hero from "../../components/aboutComponents/Hero";
import Navbar from "../../components/homeComponents/Navbar";
import { Counter } from "../../features/counter/Counter";

const MainAbout = () => {
  return (
    <>
      <div className="ds-bg-gradient">
        <Navbar />
        <Hero />
        <Counter />
      </div>
    </>
  );
};

export default MainAbout;
