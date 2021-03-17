class View {
  constructor(game, $el) {
    this.setupBoard($el);
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard(el) {
    // it should make a grid to represent the board. Build the grid using an unordered list (<ul>). 
    let newUL = $('<ul></ul>');
    //let newLI = $('<li>A</li>');
    // let body = $('body');
    el.append(newUL);

    for(let i=0; i<9; i++) {
     let newLI = $('<li>A</li>');
     newUL.append(newLI);
    }


    // The cells can be represented inside the grid using <li> elements. 

    // By giving the <ul> a display property of flex, giving it a fixed width, and setting flex-wrap: wrap the <li> elements will appear as a 3x3 grid. 

    // (You need to do some quick division or tinkering to figure out how wide the <li> elements need to be). 

    // Set a border on the cells to make it look like a real grid. 

    // Style unclicked cells with a gray background. 

    // Change the background to yellow while the user :hovers over an unclicked cell.
  }
}


module.exports = View;
