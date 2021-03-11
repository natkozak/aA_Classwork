/**
 * Initializes the Piece with its color.
 */
function Piece (color) {
    // color is an attribute it starts out with
    this.color = color;
}

/**
 * Returns the color opposite the current piece.
 */
Piece.prototype.oppColor = function () {
    // only two colors, which are white and black
    if (this.color === 'black') {
        return 'white';
    } else if (this.color === 'white') {
        return 'black';
    }
};

/**
 * Changes the piece's color to the opposite color.
 */
Piece.prototype.flip = function () {
    this.color = this.oppColor;
};

/**
 * Returns a string representation of the string
 * based on its color.
 */
Piece.prototype.toString = function () {
    if (this.color === "white") {
        return "W";
    } else if (this.color === "black") {
        return "B";
    }
};

// DON'T TOUCH THIS CODE
if (typeof window === 'undefined'){
    module.exports = Piece;
}
// DON'T TOUCH THIS CODE