const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen ">
        <div className="text-center hero-content">
          <div className="max-w-lg">
            <div className="avatar">
              <div className="mb-8 rounded-full w-36 h-36 ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src="http://daisyui.com/tailwind-css-component-profile-1@94w.png"
                  alt="jeje"
                />
              </div>
            </div>
            <h1>Hello!</h1>
            <h2>My name is Diego Sarmiento</h2>
            <p>
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
            <h2 className="my-16">Let's go!</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
