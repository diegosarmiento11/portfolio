import Card from "../../shared/components/Card";

const Projects = () => {
  return (
    <>
      <div className="bg-white w-5/6 md:w-2/3 m-auto py-24 md:py-36">
        <h2 className="text-neutral-focus">Recent projects</h2>
        <Card
          message={
            "peneano Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente."
          }
          title={"Horizontal"}
          img={"https://picsum.photos/id/1005/400/250"}
        />
        <div className="w-7/8 m-auto my-12">
          <div className="card lg:card-side bg-white bordered shadow-2xl">
            <figure>
              <img alt="pene" src="https://picsum.photos/id/1005/400/250" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">
                Horizontal
                <div className="badge mx-2">NEW</div>
              </h3>
              <p className="text-neutral-focus">
                peneano Rerum reiciendis beatae tenetur excepturi aut pariatur
                est eos. Sit sit necessitatibus veritatis sed molestiae
                voluptates incidunt iure sapiente.
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
};

export default Projects;
