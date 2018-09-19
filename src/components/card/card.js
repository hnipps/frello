import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <li
        className="flex justify-between items-center"
      >
        <p className="">{this.props.cardContent}</p>
        <button
          className="bn bg-transparent fw6 f4 hover-dark-red ml1"
          value={`${this.props.title}-card-${this.props.cardContent}`}
          onClick={this.props.deleteCard}
        >
          x
        </button>
      </li>
    );
  }
}

export default Card;
