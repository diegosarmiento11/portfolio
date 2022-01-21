import { useTranslation } from "react-i18next";
import GoToButton from "../../shared/components/buttons/GoToButton";
import BlackCard from "../../shared/components/cards/BlackCard";
import WhiteCard from "../../shared/components/cards/WhiteCard";

import ScheduleModule from "../../assets/images/scheduleModule.png";
import ProaHome from "../../assets/images/proa-home.png";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-white w-5/6 md:w-2/3 m-auto py-16">
        <div className="hero-content p-0">
          <div className="max-w-lg">
            <h2 className="text-neutral-focus">{t("projects.name")}</h2>
            <p className=" text-center text-neutral-focus">
              {t("projects.parragraph")}
            </p>
          </div>
        </div>
        <div className="w-7/8 m-auto my-12">
          <BlackCard
            title={t("blackCard.title")}
            img={ScheduleModule}
            message={t("blackCard.content")}
          />
          <WhiteCard
            title={t("whiteCard.title")}
            img={ProaHome}
            message={t("whiteCard.content")}
          />
        </div>
        <div className="py-4 flex justify-center">
          <GoToButton name={t("projects.goToButton")} />
        </div>
      </div>
    </>
  );
};

export default Projects;
