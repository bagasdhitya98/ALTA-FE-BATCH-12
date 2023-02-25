import React, { FC } from "react";

interface PersonProps {
  id: string;
  title: string;
  description: string;
  image: string;
  handleDetail?: React.MouseEventHandler;
}

const Card: FC<PersonProps> = ({
  id,
  title,
  description,
  image,
  handleDetail,
}) => {
  return (
    <div id={id} className="card w-96 bg-white shadow-xl position-absolute">
      <figure>
        <img src={image} alt="Shoes" width={100} height={100} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="card-actions justify-end my-10 mr-10">
        <button className="btn btn-primary" onClick={handleDetail}>
          Click Detail
        </button>
      </div>
    </div>
  );
};

export default Card;
