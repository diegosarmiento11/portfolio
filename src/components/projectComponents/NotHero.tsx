import { useTranslation } from "react-i18next";
import { HeroProps } from "../../shared/components/types/hero.types";

import Collapse from "./Collapse";

const NotHero = ({
  title,
  message,
  image,
  badge1,
  badge2,
  badge3,
  badge4,
  badge5,
  collapseMessage1,
  collapseMessage2,
  collapseMessage3,
  tab1,
  tab2,
  tab3,
  bgBase,
}: HeroProps) => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <div className="hero min-h-screen ">
          <div
            className="text-neutral-focus sm:gap-2 md:gap-24 flex-col hero-content lg:flex-row-reverse"
            role="alert"
          >
            <div className="m-auto">
              <img
                alt="propert"
                src={image}
                className="sm:max-h-24 md:max-h-full lg:max-w-xl rounded-lg shadow-2xl p-0"
              />
            </div>
            <div>
              <h2 className="text-neutral-focus mb-5 text-5xl font-bold xs:text-center md:text-left">
                {title}
              </h2>
              <p className="text-neutral-focus mb-5">{message}</p>
              <Collapse
                bgColor="text-neutral-focus"
                tab={tab1}
                message={collapseMessage1}
              />
              <Collapse
                bgColor="text-neutral-focus"
                tab={tab2}
                message={collapseMessage2}
              />
              <Collapse
                bgColor="text-neutral-focus"
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
      </div>
    </>
  );
};

export default NotHero;
