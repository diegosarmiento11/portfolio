import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="hero min-h-screen ">
        <div className="text-center hero-content">
          <div className="max-w-lg">
            <div className="avatar">
              <div className="mb-8 rounded-full w-36 h-36 ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                  alt="jeje"
                />
              </div>
            </div>
            <h1>{t("hero.hi")}</h1>
            <h2>{t("hero.name")}</h2>
            <p>
              <span className="font-bold text-lg"> {t("hero.welcome")} </span> I
              {t("hero.parragraph")}
            </p>
            <div className="w-full my-6">
              <button className="btn mx-4 my-4 btn-lg btn-ghost border-white text-white ">
                CV / Resumeé
              </button>
              <button className="btn mx-4 btn-lg btn-active">
                {t("hero.contact")}
              </button>
            </div>
            <h2 className="my-16">{t("hero.go")}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
