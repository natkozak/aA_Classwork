import React from 'react';
import Board from './board';
import * as Minesweeper from "./../../minesweeper";

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board: new Minesweeper.Board(9, 10)
    }
    this.updateGame = this.updateGame.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  updateGame(tileObj, boolean){
    const board = this.state.board;

    if (boolean) {
      tileObj.toggleFlag();
    } else {
      tileObj.explore();
    }
    this.setState({ board: this.state.board });

    // if (board.won()) {
    //   alert("You Won!")
    // } else if (board.lost()) {
    //   alert("You Lose!")
    // }
  }

  restartGame(){
    this.setState({ board: new Minesweeper.Board(9, 10) });
  }

  render() {
    // returns a new react component, Board, passing in this.state.board and this.updateGame as props
    const board = this.state.board;
    let modal = "";
    if (this.state.board.lost()) {
      const lostText = "You Lost! (This is a modal)";
      modal = 
      <div className="modal-screen">
        <div className="modal-content">
        {lostText}
        <button type="submit" onClick={this.restartGame}>Restart Game?</button> 
        </div>
      </div>;
      // modal screen outside the modal content
      // two different classes 
    } else if (this.state.board.won()) {
      const wonText = "You Won! (This is a modal)";
      modal = <div className="modal-screen"> <div className="modal-content">
        {wonText}</div> </div>;
    }

    return (
      <div className="board-div">
        {modal}
        <Board board={board} updateGame={this.updateGame} />
      </div>
    )

  }
}

export default Game;