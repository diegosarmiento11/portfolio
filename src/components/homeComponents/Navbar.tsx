import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="navbar bg-transparent text-neutral-content rounded-box glass">
        <div className="px-2 mx-2 navbar-start">
          <span className="text-lg font-bold">{t("navbar.name")}</span>
        </div>
        <div className="hidden px-2 mx-2 navbar-center lg:flex ">
          <div className="flex items-stretch">
            <a href="/" className="btn btn-ghost btn-sm rounded-btn">
              {t("navbar.home")}
            </a>
            <a href="/" className="btn btn-ghost btn-sm rounded-btn">
              {t("navbar.portfolio")}
            </a>
            <a href="/" className="btn btn-ghost btn-sm rounded-btn">
              {t("navbar.about")}
            </a>
            <a href="/" className="btn btn-ghost btn-sm rounded-btn">
              {t("navbar.contact")}
            </a>
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
