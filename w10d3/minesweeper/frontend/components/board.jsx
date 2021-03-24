
import React from 'react';
import Tile from './tile';
// import * as Minesweeper from "./../../minesweeper";

class Board extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    


    return (
    <div className="tile-div">
      <Tile />
    </div>
    )
  }

  mapBoard(){
    const board = this.props.board;
    const rows = board.grid.map((row, idx1) => {
      return rows.map((tile, idx2) => {
        return (
          <div key={`${idx1}-${idx2}`}>
            <Tile board={board} updateGame={this.props.updateGame} />
          </div>
          ); 
      });
    });
  }
}

export default Board;