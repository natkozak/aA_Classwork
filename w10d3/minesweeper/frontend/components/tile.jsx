import React from 'react';
import * as Minesweeper from "./../../minesweeper";

class Tile extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // where does handleClick get the "e" from (if given to an event listener?)
  // in the onClick event listener defined on the window, an argument "e" is passed into whatever callback you give the event listener
  handleClick(e) {
    console.log(this.props.tile);
    if (e.altKey) {
      this.props.updateGame(this.props.tile, true);
    } else {
      this.props.updateGame(this.props.tile, false);
    }
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
      renderedStatus = count ? `${count}`: ' ';
    } else {
      status = 'U';
      renderedStatus = 'U';
    }
    return (
      // onClick is an event listener: 
      // similar to element.addEventListener("click", this.handleClick)
      <div className={`${status} tile`} onClick={this.handleClick}>{renderedStatus}</div>
    );
  }




}

export default Tile;