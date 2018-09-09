import React, { Component } from "react";

class List extends Component {
  renderCards = cards => {
    return cards.map((card, index) => {
      return (
        <li key={`${this.props.title}-card-${index}`}>
          {card}{" "}
          <button
            value={`${this.props.title}-card-${card}`}
            onClick={this.props.deleteCard}
          >
            x
          </button>
        </li>
      );
    });
  };

  render() {
    return (
      <article>
        <h3>{this.props.title}</h3>
        <ul>
          {this.renderCards(this.props.cards)}
          <li>
            <input
              id={`${this.props.title}-card-input`}
              placeholder="Add a card..."
              onKeyUp={this.props.addCard}
            />
          </li>
        </ul>
      </article>
    );
  }
}

export default List;
