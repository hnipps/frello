import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <li
        className="flex items-center justify-between mb-2 border-solid border-0 border-transparent border rounded bg-grey-lightest px-2"
      >
        <p className="text-base my-1 mr-1 text-grey-darkest select-none">{this.props.cardContent}</p>
        <button
          className="text-xl font-semibold font-sans border-0 py-1 bg-transparent text-grey-darker hover:text-red-dark"
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
