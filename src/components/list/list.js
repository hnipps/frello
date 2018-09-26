import React, { Component } from "react";
import Card from "../card/card";
import "./list.css";

class List extends Component {
  renderCards = cards => {
    return cards.map((card, index) => {
      return (
        <Card
          key={`${this.props.title}-card-${index}`}
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
      <article className="flex-grow-0 flex-shrink-0 mb3 br3 mr2 mb3 ph2 w5 bg-black-20">
        <header className="flex justify-between items-center">
          <h3 className="mv2">{this.props.title}</h3>
          <button className="bn bg-transparent fw7 f3 hover-dark-red mid-gray pointer" value={`${this.props.title}`} onClick={this.props.deleteList}>
            x
          </button>
        </header>
        <ul className="list pl0 mv2">
          {this.renderCards(this.props.cards)}
          <li className="ph2">
            <input
              className="list-input input-reset bg-transparent dark-gray mv1 w-100 bb bt-0 bl-0 br-0 b--black-20 bw1"
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
