import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CardProps } from "../types/card.types";

const WhiteCard = ({ message, title, img }: CardProps) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-7/8 m-auto ">
        <div className="card lg:card-side bg-white bordered shadow-2xl p-2">
          <figure>
            <img className="md:h-64 w-full rounded-lg" alt="/" src={img} />
          </figure>
          <div className="card-body">
            <h3 className="card-title ">
              {title}
              <div className="badge mx-2">{t("whiteCard.badge")}</div>
            </h3>
            <p className="text-neutral-focus">{message}</p>
            <div className="card-actions">
              <Link to="/mainProjects">
                <button className="btn btn-primary">
                  {t("whiteCard.firstButton")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhiteCard;
