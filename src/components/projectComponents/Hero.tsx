import { useTranslation } from "react-i18next";
import { HeroProps } from "../../shared/components/types/hero.types";

import Collapse from "./Collapse";

const Hero = ({
  title,
  message,
  image,
  badge1,
  badge2,
  badge3,
  badge4,
  badge5,
  bgColor,
  collapseMessage1,
  collapseMessage2,
  collapseMessage3,
  tab1,
  tab2,
  tab3,
}: HeroProps) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="hero min-h-screen">
        <div
          className="flex-col sm:gap-2 md:gap-24 hero-content lg:flex-row-reverse p-0"
          role="alert"
        >
          <div className="m-auto pt-10">
            <img
              alt="propert"
              src={image}
              className="xs:max-h-24 md:max-h-full lg:max-w-xl rounded-lg shadow-2xl p-0"
            />
          </div>
          <div>
            <h2
              className="mb-5 font-bold text-5xl xs:text-center md:text-left "
            >
              {title}
            </h2>
            <p className={`${bgColor} mb-5`}>{message}</p>
            <Collapse
              tab={tab1}
              message={collapseMessage1}
            />
            <Collapse
              tab={tab2}
              message={collapseMessage2}
            />
            <Collapse
              tab={tab3}
              message={collapseMessage3}
            />
            <div className="mt-8">
              <div className="badge badge-accent m-1">{badge1}</div>
              <div className="badge badge-accent m-1">{badge2}</div>
              <div className="badge badge-accent m-1">{badge3}</div>
              <div className="badge badge-accent m-1">{badge4}</div>
              <div className="badge badge-accent m-1">{badge5}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
