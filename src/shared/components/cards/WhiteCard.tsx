import { useTranslation } from "react-i18next";
import { CardProps } from "../types/card.types";

const WhiteCard = ({ message, title, img }: CardProps) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-7/8 m-auto ">
        <div className="card lg:card-side bg-white bordered shadow-2xl">
          <figure>
            <img alt="/" src={img} />
          </figure>
          <div className="card-body">
            <h3 className="card-title ">
              {title}
              <div className="badge mx-2">{t("whiteCard.badge")}</div>
            </h3>
            <p className="text-neutral-focus">{message}</p>
            <div className="card-actions">
              <button className="btn btn-primary">
                {t("whiteCard.firstButton")}
              </button>
              <button className="btn btn-ghost">
                {t("whiteCard.secondButton")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhiteCard;
