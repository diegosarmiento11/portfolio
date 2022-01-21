import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CardProps } from "../types/card.types";

const BlackCard = ({ message, title, img }: CardProps) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-7/8 m-auto ">
        <div className="card lg:card-side bg-neutral-focus bordered my-12 shadow-2xl p-2">
          <figure>
            <img
              className="md:h-64 w-full object-contain rounded-lg shadow-2xl"
              alt="/"
              src={img}
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title text-white">
              {title}
              <div className="badge bg-white text-black mx-2">
                {t("blackCard.badge")}
              </div>
            </h3>
            <p>{message}</p>
            <div className="card-actions">
              <Link to="/mainProjects">
                <button className="btn btn-primary">
                  {t("blackCard.firstButton")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlackCard;
