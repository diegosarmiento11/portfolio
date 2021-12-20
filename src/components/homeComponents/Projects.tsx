import React from "react";

export default function Projects() {
  return (
    <>
      <div className="bg-white w-5/6 md:w-2/3 m-auto">
        <h1 className=" pb-4 pt-16 text-5xl font-bold text-center">Projects</h1>
        <div className="w-7/8 m-auto my-8 ">
          <div className="card lg:card-side bg-neutral-focus gap-6 bordered shadow-2xl">
            <figure>
              <img alt="pene" src="https://picsum.photos/id/1005/400/250" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">
                Horizontal
                <div className="badge bg-white text-black mx-2">NEW</div>
              </h2>
              <p className="text-white">
                Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
                Sit sit necessitatibus veritatis sed molestiae voluptates
                incidunt iure sapiente.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-ghost text-white">More info</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-7/8 m-auto my-8">
          <div className="card lg:card-side bg-white gap-6 bordered shadow-2xl">
            <figure>
              <img alt="pene" src="https://picsum.photos/id/1005/400/250" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Horizontal
                <div className="badge mx-2">NEW</div>
              </h2>
              <p>
                Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
                Sit sit necessitatibus veritatis sed molestiae voluptates
                incidunt iure sapiente.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-ghost">More info</button>
              </div>
              <div className="mt-4">
                <div className="badge badge-secondary ml-2 ">secondary</div>
                <div className="badge badge-secondary ml-2 ">secondary</div>
                <div className="badge badge-secondary ml-2 ">secondary</div>
                <div className="badge badge-secondary ml-2 ">secondary</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-7/8 m-auto my-8">
          <div className="card lg:card-side bordered gap-6 bordered shadow-2xl">
            <figure>
              <img alt="pene" src="https://picsum.photos/id/1005/400/250" />
            </figure>
            <div className="card-body">
              <h2 className="card-title ">Horizontal</h2>
              <p>
                Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
                Sit sit necessitatibus veritatis sed molestiae voluptates
                incidunt iure sapiente.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-ghost text-white">More info</button>
              </div>
              <div className="mt-4">
                <div className="badge badge-secondary ml-2 ">secondary</div>
                <div className="badge badge-secondary ml-2 ">secondary</div>
                <div className="badge badge-secondary ml-2 ">secondary</div>
                <div className="badge badge-secondary ml-2 ">secondary</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-7/8 m-auto my-8">
          <div className="card lg:card-side bg-white gap-6 bordered shadow-2xl">
            <figure>
              <img alt="pene" src="https://picsum.photos/id/1005/400/250" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Horizontal</h2>
              <p>
                Rerum reiciendis beatae tenetur excepturi aut pariatur est eos.
                Sit sit necessitatibus veritatis sed molestiae voluptates
                incidunt iure sapiente.
              </p>
              <div className="card-actions">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-ghost">More info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
