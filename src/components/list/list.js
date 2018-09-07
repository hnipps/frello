import React, { Component } from "react";

class List extends Component {
  renderCards = (cards) => {
    return cards.map(card => {
      return <li>{card}</li>
    })
  }

  render() {
    return (
      <article>
        <h3>{this.props.title}</h3>
        <ul>
          {this.renderCards(this.props.cards)}
          <li>
            <input placeholder="Add a card..." />
          </li>
        </ul>
      </article>
    );
  }
}

export default List;
