// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  var Piece = require("./piece");
}
// DON'T TOUCH THIS CODE

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let grid = new Array(8);
  grid.forEach( function(ele){
      ele = new Array(8);
    }
  )
  grid[3][4] = new Piece('black');
  grid[4][3] = new Piece('black');
  grid[3][3] = new Piece('white');
  grid[4][4] = new Piece('white');
  return grid;
}

// arr.forEach(callback(currentValue[, index[, array]]) {
//   // execute something
// }[, thisArg]);
// this is the conventional way for the documentation to express that the argument inside the brackets is optional.

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  let x = pos[0];
  let y = pos[1];
  if (x < 0 || x > 7 || y < 0 || y > 7) {
    return false;
  } else {
    return true;
  }
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
    if (this.grid[pos[0]][pos[1]] instanceof Piece) {
      return this.grid[pos[0]][pos[1]];
    } else if (!this.isValidPos(pos)) {
      return new Error('Not valid pos!');
    } else {
      return undefined;
    }
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let piece = this.getPiece(pos);
  if (piece.color === color) {
    return true;
  } else {
    return false;
  }

};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  if (this.getPiece === undefined) {
    return false;
  } else {
    return true;
  }
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */
Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip){
  // use Board.DIRS
  // does it need to be recursive?

  // base cases:
  // returns empty array when pos is not on the board'
  // returns empty array when there is a blank space one position away from the current position
  // returns empty array if no pieces of the opposite color are found
  let arr = [];
  let nextPos = [pos[0] + dir[0], pos[1] + dir[1]];
  while (this.isValidPos(nextPos) && 
         this.getPiece(nextPos) != undefined && 
         this.getPiece(nextPos).color != color) 
         {
    // if (!this.isValidPos(pos) || this.getPiece(pos) === undefined) {
    //   return [];
    // } else if (this.getPiece(pos).color != color) {
    //   let arr = [this.getPiece(pos)];
    //   return arr;
    // }
    // take the next postion in that direction and add it to our empty array
    arr.push(this.getPiece(nextPos));
    nextPos = [nextPos[0] + dir[0], nextPos[1] + dir[1]];
    
  }
  return arr;

  // iterative step:
  // returns positions for longer horizontal and vertical cases
  // returns positions for longer diagonal cases
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};


// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
  module.exports = Board;
}
// DON'T TOUCH THIS CODE