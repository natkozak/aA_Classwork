
import React from 'react';
import Tile from './tile';
// import * as Minesweeper from "./../../minesweeper";

class Board extends React.Component {
  constructor(props){
    super(props);
    this.mapRow = this.mapRow.bind(this);
    this.mapTile = this.mapTile.bind(this);
  }

  render() {
    const board = this.props.board;


    return (
    <div className="board-div">
      {this.mapRow()}
    </div>
    )
  }

  mapRow(){
    const board = this.props.board;
    // console.log('hello')
    return board.grid.map((row, idx1) => {
        return(
        <div className='mapped-row' key={`row-${idx1}`}>
          {this.mapTile(row, idx1)}
        </div>
        );
    });
  }

  mapTile(row, idx1){
    const board = this.props.board;
    return row.map((tile, idx2) => {
      return (
        <div className='mapped-tile' key={`${idx1}-${idx2}`}>
          <Tile tile={tile} board={board} updateGame={this.props.updateGame} />
        </div>
        ); 
      
    });
  }

  // mapRow(){
  //   const board = this.props.board;
  //   console.log('hello')
  //   return board.grid.map((row, idx1) => {
  //       return row.map((tile, idx2) => {
  //       return (
  //         <div key={`${idx1}-${idx2}`}>
  //           <Tile board={board} updateGame={this.props.updateGame} />
  //         </div>
  //         ); 
        
  //     });
      
  //   });
  // }
}

export default Board;