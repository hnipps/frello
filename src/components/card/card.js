import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <li key={`${this.props.title}-card-${this.props.cardIndex}`}>
        {this.props.cardContent}
        <button
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
