import React, { Component } from "react";

class Board extends Component {
  render() {
    const board = this.props.board;
    return (
      <div className="board-container">
        {/* Board Header */}
        <div className="dib w-100 pl2">
          <h2 className="mb3 mt0 mid-gray">{board.title}</h2>
        </div>
        {/* List Listing */}
        <div className="flex items-start overflow-scroll ph2">
          {this.props.renderLists(board.lists)}
          <div className="flex-grow-0 flex-shrink-0 ph2 w5">
            <input className="input-reset mv1 w-100 bg-transparent bb bt-0 bl-0 br-0 b--black-20 bw1" placeholder="Add a list..." onKeyUp={this.props.addList} />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
