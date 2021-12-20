import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-transparent text-neutral-content rounded-box glass">
        <div className="px-2 mx-2 navbar-start">
          <span className="text-lg font-bold">Diego Sarmiento</span>
        </div>
        <div className="hidden px-2 mx-2 navbar-center lg:flex ">
          <div className="flex items-stretch">
            <a href="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </a>
            <a href="/" className="btn btn-ghost btn-sm rounded-btn">
              Portfolio
            </a>
            <a href="/" className="btn btn-ghost btn-sm rounded-btn">
              About
            </a>
            <a href="/" className="btn btn-ghost btn-sm rounded-btn">
              Contact
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
