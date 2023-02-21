import React, { Component } from "react";

interface Person {
  id: string;
  title: string;
  description: string;
  image: string;
}

class Card extends Component<Person> {
  render() {
    const { id, title, description, image } = this.props;

    return (
      <div id={id} className="card w-96 bg-white shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Card;
