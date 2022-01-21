import { useTranslation } from "react-i18next";

export type CollapseTypes = {
  tab: string;
  message: string;
  bgColor?: string;
};

const Collapse = ({ tab, message, bgColor }: CollapseTypes) => {
  const { t } = useTranslation();
  return (
    <>
      <div
        tabIndex={0}
        className="collapse md:w-96 border rounded-box border-base-400 collapse-arrow my-3"
      >
        <div
          className={`${bgColor} collapse-title text-xl font-medium text-white`}
        >
          {tab}
        </div>
        <div className="collapse-content">
          <p className={`${bgColor}`}>{message}</p>
        </div>
      </div>
    </>
  );
};

export default Collapse;
