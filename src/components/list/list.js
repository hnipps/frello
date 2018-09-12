import React, { Component } from "react";
import Card from "../card/card";

class List extends Component {
  renderCards = cards => {
    return cards.map((card, index) => {
      return (
        <Card
          cardContent={card}
          cardIndex={index}
          deleteCard={this.props.deleteCard}
          title={this.props.title}
        ></Card>
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
