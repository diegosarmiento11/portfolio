import { useTranslation } from "react-i18next";

import Navbar from "../../components/homeComponents/Navbar";
import Hero from "../../components/projectComponents/Hero";
import NotHero from "../../components/projectComponents/NotHero";
import Footer from "../../components/homeComponents/Footer";

import Proa from "../../assets/images/proa-home.png";
import ProaLogin from "../../assets/images/proa-login.png";
import Robinfood from "../../assets/images/robinfood.png";

const MainProjects = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="ds-bg-gradient">
        <Navbar />
        <div className="w-5/6 m-auto hero-content md:p-0">
          <Hero
            title={t("mainProjects.hero.title")}
            message={t("mainProjects.hero.content")}
            image={Robinfood}
            badge1="Vue.js"
            badge2="Vuex"
            badge3="Javascript"
            badge4="Typescript"
            badge5="Jest"
            collapseMessage1={t("mainProjects.hero.collapse.message1")}
            collapseMessage2={t("mainProjects.hero.collapse.message2")}
            collapseMessage3={t("mainProjects.hero.collapse.message3")}
            tab1={t("mainProjects.collapse.first")}
            tab2={t("mainProjects.collapse.second")}
            tab3={t("mainProjects.collapse.third")}
          />
        </div>
      </div>
      <div className="w-5/6 hero-content m-auto">
        <NotHero
          title={t("mainProjects.notHero.title")}
          image={Proa}
          message={t("mainProjects.hero.content")}
          badge1="React.js"
          badge2="Javascript"
          badge3="Figma"
          badge4="Vue Router"
          badge5="Responsive"
          collapseMessage1={t("mainProjects.notHero.collapse.message1")}
          collapseMessage2={t("mainProjects.notHero.collapse.message2")}
          collapseMessage3={t("mainProjects.notHero.collapse.message3")}
          tab1={t("mainProjects.collapse.first")}
          tab2={t("mainProjects.collapse.second")}
          tab3={t("mainProjects.collapse.third")}
        />
      </div>
      <div className="bg-base-200">
        <div className="w-5/6 hero-content m-auto">
          <NotHero
            title={t("mainProjects.notHero.title")}
            image={Proa}
            message={t("mainProjects.hero.content")}
            badge1="React.js"
            badge2="Javascript"
            badge3="Figma"
            badge4="Vue Router"
            badge5="Responsive"
            collapseMessage1={t("mainProjects.notHero.collapse.message1")}
            collapseMessage2={t("mainProjects.notHero.collapse.message2")}
            collapseMessage3={t("mainProjects.notHero.collapse.message3")}
            tab1={t("mainProjects.collapse.first")}
            tab2={t("mainProjects.collapse.second")}
            tab3={t("mainProjects.collapse.third")}
          />
        </div>
      </div>
      <div className="bg-neutral-focus">
        <div className="w-5/6 m-auto hero-content">
          <Hero
            title={t("mainProjects.hero1.title")}
            message={t("mainProjects.hero.content")}
            image={ProaLogin}
            badge1="React.js"
            badge2="Javascript"
            badge3="Mobile First"
            badge4="Aws Amplify"
            badge5="SASS"
            collapseMessage1={t("mainProjects.hero1.collapse.message1")}
            collapseMessage2={t("mainProjects.hero1.collapse.message2")}
            collapseMessage3={t("mainProjects.hero1.collapse.message3")}
            tab1={t("mainProjects.collapse.first")}
            tab2={t("mainProjects.collapse.second")}
            tab3={t("mainProjects.collapse.third")}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainProjects;
