import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="hero min-h-screen bg-neutral my-8 md:py-16">
        <div className="hero-content">
          <div className="max-w-lg m-auto bg-neutral">
            <h2>{t("aboutMe.name")}</h2>
            <div className="justify-center flex my-12">
              <div className="tabs tabs-boxed  bg-neutral-focus">
                <a href="/" className="tab tab-lg text-white">
                  {t("aboutMe.firstTab")}
                </a>
                <a href="/" className="tab tab-lg tab-active">
                  {t("aboutMe.secondTab")}
                </a>
                <a href="/" className="tab tab-lg text-white">
                  {t("aboutMe.thirdTab")}
                </a>
              </div>
            </div>
            <p className="text-center">{t("aboutMe.parragraph")}</p>
            <div className="card shadow-2xl lg:card-side bg-primary text-primary-content m-6">
              <div className="card-body">
                <p>
                  Rerum reiciendis beatae tenetur excepturi aut pariatur est
                  eos.
                </p>
                <div className="justify-end card-actions">
                  <button className="btn btn-primary">
                    More info
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 ml-2 stroke-current"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
