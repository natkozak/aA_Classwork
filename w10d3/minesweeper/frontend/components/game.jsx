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
  }

  render(){
    // returns a new react component, Board, passing in this.state.board and this.updateGame as props
    const board = this.state.board;

    return (
      <div className="board-div">
        <Board board={board} updateGame={this.updateGame} />
      </div> 
    )
    
  }

  updateGame(){

  }
}

export default Game;