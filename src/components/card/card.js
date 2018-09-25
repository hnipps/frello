import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <li
        className="flex justify-between items-center br2 mb2 ph2 bg-black-20"
      >
        <p className="mv1 mr1">{this.props.cardContent}</p>
        <button
          className="bn bg-transparent fw6 f4 hover-dark-red mid-gray pointer"
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
