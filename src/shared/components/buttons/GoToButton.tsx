import { Link } from "react-router-dom";

export type GoToButtonProps = {
  name: string;
};

const GoToButton = ({ name }: GoToButtonProps) => {
  return (
    <>
      <Link to="/mainProjects">
        <button className="btn btn-ghost">
          {name}
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
      </Link>
    </>
  );
};

export default GoToButton;
