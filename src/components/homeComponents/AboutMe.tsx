import React from "react";

export default function AboutMe() {
  return (
    <>
      <div className="hero min-h-screen bg-neutral my-8 py-16">
        <div className="hero-content">
          <div className="max-w-lg m-auto bg-neutral">
            <h1 className="my-10 text-4xl md:text-5xl font-bold text-center text-white">
              Let's start with something about me...
            </h1>
            <div className="justify-center flex my-12">
              <div className="tabs tabs-boxed  bg-neutral-focus">
                <a href="/" className="tab tab-lg text-white">
                  Tab 1
                </a>
                <a href="/" className="tab tab-lg tab-active">
                  Tab 2
                </a>
                <a href="/" className="tab tab-lg text-white">
                  Tab 3
                </a>
              </div>
            </div>
            <p className="text-white text-center">
              Choosing the rigth candidate could be overwhelmed , right? Let me
              tell you something about me and the challenges that i have
              overcome I have developed self-taught learning skills and have a
              huge fascination with continuing to learn as i go along. I have
              been
            </p>
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
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
}
