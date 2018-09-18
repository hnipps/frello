import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <li
        className="card"
      >
        <p className="card-content unselectable">{this.props.cardContent}</p>
        <button
          className="card-delete-button"
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
