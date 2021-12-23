export type CardProps = {
  title: string;
  message: string;
  img: string;
};

const Card = ({ message, title, img }: CardProps) => {
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
              <div className="badge bg-white text-black mx-2">NEW</div>
            </h3>
            <p>{message}</p>
            <div className="card-actions">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-ghost text-white">More info</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
