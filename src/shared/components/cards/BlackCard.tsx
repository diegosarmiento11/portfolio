import { useTranslation } from "react-i18next";
import { CardProps } from "../types/card.types";

const BlackCard = ({ message, title, img }: CardProps) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-7/8 m-auto ">
        <div className="card lg:card-side bg-neutral-focus bordered my-12 shadow-2xl">
          <figure>
            <img alt="/" src={img} />
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
              <button className="btn btn-primary">
                {t("blackCard.firstButton")}
              </button>
              <button className="btn btn-ghost text-white">
                {t("blackCard.secondButton")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlackCard;
