import React, { Component } from "react";
import List from "./components/list/list";

class App extends Component {
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
            <List
              title="Stuff I wanna do"
              cards={[
                "Learn to speak Japanese",
                "Order salad instead of fries (just once)"
              ]}
            />
            <List
              title="Stuff I've planned"
              cards={[
                "Ski in Colorado"
              ]}
            />
            <List
              title="Stuff I did!"
              cards={[
                "Visit Macchu Picchu",
                "Eat pizza in Rome"
              ]}
            />
            <input placeholder="Add a list..." />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
