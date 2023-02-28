import React, { FC } from "react";

interface PersonProps {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  total?: any;
  handleDetail?: React.MouseEventHandler;
  handleIncrement?: React.MouseEventHandler;
  handleDecrement?: React.MouseEventHandler;
}

const Card: FC<PersonProps> = ({
  id,
  title,
  description,
  image,
  price,
  total,
  handleDetail,
  handleIncrement,
  handleDecrement,
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
      <div className="text-black font-semibold m-10 h-10">
        Price : ${price}
      </div>
      <div className="text-black font-semibold m-10 h-10">
        Total Item : {total}
      </div>
      <div className="card-actions justify-end my-10 mr-10">
        <button className="btn btn-primary" onClick={handleIncrement}>
          +
        </button>
        <button className="btn btn-primary" onClick={handleDecrement}>
          -
        </button>
        <button className="btn btn-primary" onClick={handleDetail}>
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Card;
