import React from 'react';
import * as Minesweeper from "./../../minesweeper";

class Tile extends React.Component{
  constructor(props){
    super(props);
    this.board = this.props.board;
    this.grid = this.props.board.grid;

  }

  render(){
    const tile = this.props.tile;
    let status = '';
    let renderedStatus = '';
    if(tile.bombed && tile.explored){
      status = 'B';
      renderedStatus = 'B';
    } else if (tile.flagged && !tile.explored) {
      status = 'F';
      renderedStatus = 'F';
    } else if (tile.explored){
      let count = tile.adjacentBombCount();
      status = 'E';
      renderedStatus = count ? `${count}`: '_';
    } else {
      status = 'U';
      renderedStatus = 'U';
    }
    return (
      <div className={`${status} tile`}>{renderedStatus}</div>
    );
  }
}

export default Tile;