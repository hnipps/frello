import React, { Component } from "react";
import List from "./components/list/list";

class App extends Component {
  renderLists = lists => {
    return lists.map(list => {
      return <List title={list.title} cards={list.cards} />;
    });
  };

  render() {
    const lists = [
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
    ];
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
            {this.renderLists(lists)}
            <input placeholder="Add a list..." />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
