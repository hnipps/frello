import React, { Component } from "react";
import List from "./components/list/list";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: [
        {
          title: "Stuff I wanna do",
          cards: [
            "Learn to speak Japanese",
            "Order salad instead of fries (just once)"
          ]
        },
        {
          title: "Stuff I've planned",
          cards: [
            "Ski in Colorado",
            "Eat a bag of Cheetos without licking my fingers"
          ]
        },
        {
          title: "Stuff I did!!",
          cards: ["Visit Machu Picchu", "Eat pizza in Rome"]
        }
      ]
    };
  }

  addList = event => {
    event.preventDefault();
    if (event.keyCode === 13) {
      const newList = event.target.value;
      this.setState(prevState => ({
        lists: [
          ...prevState.lists,
          {
            title: newList,
            cards: []
          }
        ]
      }));
      event.target.value = "";
    }
  };

  addCard = event => {
    event.preventDefault();
    if (event.keyCode === 13) {
      const newCard = event.target.value;
      const titleOfListToUpdate = event.target.id.slice(
        0,
        event.target.id.indexOf("-")
      );

      let indexToUpdate;
      const listToUpdate = this.state.lists.find((list, index) => {
        indexToUpdate = index;
        return list.title === titleOfListToUpdate;
      });

      const updatedList = {
        ...listToUpdate,
        cards: [...listToUpdate.cards, newCard]
      };
      const newLists = [...this.state.lists];
      newLists.splice(indexToUpdate, 1, updatedList);

      this.setState(prevState => ({
        ...prevState,
        lists: newLists
      }));
      event.target.value = "";
    }
  };

  deleteCard = event => {
    event.preventDefault();
    const buttonValue = event.target.value;
    const titleOfListToUpdate = buttonValue.slice(0, buttonValue.indexOf("-"));
    const cardToUpdate = buttonValue.slice(
      buttonValue.indexOf("-") + 6,
      buttonValue.length
    );
    let listIndexToUpdate;
    const listToUpdate = this.state.lists.find((list, index) => {
      listIndexToUpdate = index;
      return list.title === titleOfListToUpdate;
    });

    const updatedList = {
      ...listToUpdate,
      cards: [...listToUpdate.cards]
    };
    const cardIndexToUpdate = listToUpdate.cards.findIndex(card => {
      return card === cardToUpdate;
    });
    updatedList.cards.splice(cardIndexToUpdate, 1);

    const newLists = [...this.state.lists];
    newLists.splice(listIndexToUpdate, 1, updatedList);

    this.setState(prevState => ({
      ...prevState,
      lists: newLists
    }));
  };

  renderLists = lists => {
    return lists.map(list => {
      return (
        <List
          key={`list-${list.title}`}
          title={list.title}
          cards={list.cards}
          addCard={this.addCard}
          deleteCard={this.deleteCard}
        />
      );
    });
  };

  render() {
    return (
      <div>
        {/* Navbar */}
        <div>
          <h1>Frello</h1>
          <button>Boards</button>
        </div>
        {/* Board Content */}
        <div>
          {/* Board Header */}
          <div>
            <h2>Bucket List</h2>
          </div>
          {/* List Listing */}
          <div>
            {this.renderLists(this.state.lists)}
            <input placeholder="Add a list..." onKeyUp={this.addList} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
