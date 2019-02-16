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
      <article className="w-64 border-solid border border-transparent rounded-lg mb-4 mr-2 bg-grey flex-no-grow flex-no-shrink px-2 font-sans">
        <header className="flex items-center justify-between">
          <h3 className="my-2 text-grey-darkest select-none">{this.props.title}</h3>
          <button className="text-2xl font-semibold border-none bg-transparent text-grey-darkest hover:text-red-dark" value={`${this.props.title}`} onClick={this.props.deleteList}>
            x
          </button>
        </header>
        <ul className="list-reset my-2">
          {this.renderCards(this.props.cards)}
          <li className="border-solid border border-transparent rounded bg-transparent px-2">
            <input
              className="w-full text-base p-0 my-1 mx-0 bg-transparent border-b border-grey-dark"
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
