import React, { Component } from "react";

class Board extends Component {
  render() {
    const board = this.props.board;
    return (
      <div className="board-container">
        {/* Board Header */}
        <div className="dib w-100 pl2">
          <h2 className="mv2">{board.title}</h2>
        </div>
        {/* List Listing */}
        <div className="flex overflow-scroll pl2">
          {this.props.renderLists(board.lists)}
          <div className="add-list-container">
            <input className="board-add-list-input" placeholder="Add a list..." onKeyUp={this.props.addList} />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
