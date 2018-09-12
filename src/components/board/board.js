import React, { Component } from "react";
import "./board.css";

class Board extends Component {
  render() {
    const board = this.props.board;
    return (
      <div className="board-container">
        {/* Board Header */}
        <div className="board-header">
          <h2 className="board-title">{board.title}</h2>
        </div>
        {/* List Listing */}
        <div className="list-container">
          {this.props.renderLists(board.lists)}
          <div className="add-list-container">
            <input placeholder="Add a list..." onKeyUp={this.props.addList} />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
