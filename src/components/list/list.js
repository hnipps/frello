import React, { Component } from "react";
import Card from "../card/card";
import "./list.css";

class List extends Component {
  renderCards = cards => {
    return cards.map((card, index) => {
      return (
        <Card
          cardContent={card}
          cardIndex={index}
          deleteCard={this.props.deleteCard}
          title={this.props.title}
        />
      );
    });
  };

  render() {
    return (
      <article className="list">
        <header className="list-header">
          <h3 className="list-title">{this.props.title}</h3>
          <button value={`${this.props.title}`} onClick={this.props.deleteList}>
            x
          </button>
        </header>
        <ul className="card-list">
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
