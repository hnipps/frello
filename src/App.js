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
          cards: ["Ski in Colorado"]
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
    const newList = event.target.value;
    if (event.keyCode === 13) {
      this.setState(prevState => ({
        lists: [
          ...prevState.lists,
          {
            title: newList,
            cards: []
          }
        ]
      }));
    }
  };

  renderLists = lists => {
    return lists.map(list => {
      return <List title={list.title} cards={list.cards} />;
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
