import React from "react";

export default function Hero() {
  return (
    <>
      <div className="hero min-h-screen ">
        <div className="text-center hero-content">
          <div className="max-w-lg">
            <div className="avatar">
              <div className="mb-8 rounded-full w-36 h-36 ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                  alt="penes"
                />
              </div>
            </div>
            <h1 className="mb-5 text-6xl text-white font-bold">Hello!</h1>
            <h3 className="mb-5 text-3xl text-white font-bold">
              My name is Diego Sarmiento
            </h3>
            <p className="mb-6 text-white">
              <span className="font-bold text-lg">
                {" "}
                Welcome to my portfolio.{" "}
              </span>{" "}
              I will show you how i design and develop responsive, optimized and
              efficient web aplications and websites 😛
            </p>
            <div className="w-full my-6">
              <button className="btn mx-4 my-4 btn-lg btn-ghost border-white text-white ">
                CV / Resumeé
              </button>
              <button className="btn mx-4 btn-lg btn-active">
                Get in touch
              </button>
            </div>
            <h1 className="my-16 text-4xl text-white font-bold">Let's go!</h1>
          </div>
        </div>
      </div>
    </>
  );
}
