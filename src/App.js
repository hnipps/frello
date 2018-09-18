import React, { Component } from "react";
import List from "./components/list/list";
import Board from "./components/board/board";

class App extends Component {
  currentBoard;
  constructor() {
    super();
    this.state = {
      boards: [
        {
          title: "Bucket List",
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
        }
      ]
    };
  }

  addList = event => {
    if (event.keyCode === 13) {
      const newList = event.target.value;
      const boardIndexToUpdate = this.findBoardIndex();
      const updatedBoard = {
        ...this.currentBoard,
        lists: [
          ...this.currentBoard.lists,
          {
            title: newList,
            cards: []
          }
        ]
      };
      const updatedBoards = [...this.state.boards];
      updatedBoards.splice(boardIndexToUpdate, 1, updatedBoard);
      this.setState(prevState => ({
        boards: updatedBoards
      }));
      event.target.value = "";
    }
  };

  deleteList = event => {
    const boardIndexToUpdate = this.findBoardIndex();
    const titleOfListToDelete = event.target.value;
    const listIndexToDelete = this.currentBoard.lists.findIndex(list => {
      return list.title === titleOfListToDelete;
    });

    const newLists = [...this.currentBoard.lists];
    newLists.splice(listIndexToDelete, 1);

    const updatedBoard = {
      ...this.currentBoard,
      lists: newLists
    };
    const updatedBoards = [...this.state.boards];
    updatedBoards.splice(boardIndexToUpdate, 1, updatedBoard);
    this.setState(prevState => ({
      boards: updatedBoards
    }));
  };

  addCard = event => {
    if (event.keyCode === 13) {
      const newCard = event.target.value;

      const boardIndexToUpdate = this.findBoardIndex();

      const titleOfListToUpdate = event.target.id.slice(
        0,
        event.target.id.indexOf("-")
      );

      let indexToUpdate;
      const listToUpdate = this.currentBoard.lists.find((list, index) => {
        indexToUpdate = index;
        return list.title === titleOfListToUpdate;
      });

      const updatedList = {
        ...listToUpdate,
        cards: [...listToUpdate.cards, newCard]
      };
      const newLists = [...this.currentBoard.lists];
      newLists.splice(indexToUpdate, 1, updatedList);

      const updatedBoard = {
        ...this.currentBoard,
        lists: newLists
      };
      const updatedBoards = [...this.state.boards];
      updatedBoards.splice(boardIndexToUpdate, 1, updatedBoard);
      this.setState(prevState => ({
        boards: updatedBoards
      }));
      event.target.value = "";
    }
  };

  deleteCard = event => {
    const buttonValue = event.target.value;
    const boardIndexToUpdate = this.findBoardIndex();
    const titleOfListToUpdate = buttonValue.slice(0, buttonValue.indexOf("-"));
    const cardToUpdate = buttonValue.slice(
      buttonValue.indexOf("-") + 6,
      buttonValue.length
    );
    let listIndexToUpdate;
    const listToUpdate = this.currentBoard.lists.find((list, index) => {
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

    const newLists = [...this.currentBoard.lists];
    newLists.splice(listIndexToUpdate, 1, updatedList);

    const updatedBoard = {
      ...this.currentBoard,
      lists: newLists
    };
    const updatedBoards = [...this.state.boards];
    updatedBoards.splice(boardIndexToUpdate, 1, updatedBoard);
    this.setState(prevState => ({
      boards: updatedBoards
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
          deleteList={this.deleteList}
        />
      );
    });
  };

  findBoardIndex() {
    const boardTitle = this.currentBoard.title;
    const boardIndexToUpdate = this.state.boards.findIndex(board => {
      return board.title === boardTitle;
    });
    return boardIndexToUpdate;
  }

  render() {
    this.currentBoard = this.state.boards[0];
    return (
      <div id="appContainer">
        {/* Navbar */}
        <div className="navbar">
          <h1 className="navbar-title unselectable">FRELLO</h1>
        </div>
        {/* Board Content */}
        <Board
          board={this.currentBoard}
          renderLists={this.renderLists}
          addList={this.addList}
        />
      </div>
    );
  }
}

export default App;
