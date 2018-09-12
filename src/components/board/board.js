import React, { Component } from "react";

class Board extends Component {
  render() {
    const board = this.props.board;
    return (
      <div>
        {/* Board Header */}
        <div>
          <h2>{board.title}</h2>
        </div>
        {/* List Listing */}
        <div>
          {this.props.renderLists(board.lists)}
          <input placeholder="Add a list..." onKeyUp={this.props.addList} />
        </div>
      </div>
    );
  }
}

export default Board;
