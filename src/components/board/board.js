import React, { Component } from "react";

class Board extends Component {
  render() {
    const board = this.props.board;
    return (
      <div className="pl-4">
        {/* Board Header */}
        <div className="text-grey-darker">
          <h2 className="inline-block my-2 select-none">{board.title}</h2>
        </div>
        {/* List Listing */}
        <div className="flex items-start overflow-x-scroll py-2">
          {this.props.renderLists(board.lists)}
          <div className="flex flex-col bg-transparent rounded py-2 px-4">
            <input className="text-base p-0 my-2 mx-0 bg-transparent border-solid border-b-2 border-t-0 border-l-0 border-r-0 border-grey-dark" placeholder="Add a list..." onKeyUp={this.props.addList} />
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
