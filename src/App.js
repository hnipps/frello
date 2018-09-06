import React, { Component } from "react";

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
            <article>
              <h3>Stuff I wanna do</h3>
              <ul>
                <li>Learn to speak Japanese</li>
                <li>Order salad instead of fries (just once)</li>
                <li>
                  <input placeholder="Add a card..." />
                </li>
              </ul>
            </article>
            <article>
              <h3>Stuff I've planned</h3>
              <ul>
                <li>Ski in Colorado</li>
                <li>
                  <input placeholder="Add a card..." />
                </li>
              </ul>
            </article>
            <article>
              <h3>Stuff I did!</h3>
              <ul>
                <li>Visit Macchu Picchu</li>
                <li>Eat pizza in Rome</li>
                <li>
                  <input placeholder="Add a card..." />
                </li>
              </ul>
            </article>
            <input placeholder="Add a list..." />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
