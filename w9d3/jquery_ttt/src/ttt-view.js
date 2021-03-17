class View {
  constructor(game, $el) {
    this.setupBoard($el);
    this.game = game;
  }

  bindEvents() {
    // make a click event
    // when they click on an A, make that register as a move
    const li = $('li')
    li.on('click', (e) => {
      
      $(e.target).addClass('played');
      this.game.playMove(this.makeMove($(e.target))); // change to $(e.target) here too
      $(e.target).text(this.game.currentPlayer);
      $(e.target).addClass(`${this.game.currentPlayer}`);
       if (this.game.isOver()) {
         $(() => alert(`${this.game.currentPlayer} won!`)) 
       }
      
    })
  }

  makeMove($li) {
    // make a pos variable
    let pos = [];
    // find the right pos value depending on the li element
    if ($li.hasClass("0")) {
      pos = [0, 0];
    } else if ($li.hasClass("1")) {
      pos = [0, 1];
    } else if ($li.hasClass("2")) {
      pos = [0, 2];
    } else if ($li.hasClass("3")) {
      pos = [1, 0];
    } else if ($li.hasClass("4")) {
      pos = [1, 1];
    } else if ($li.hasClass("5")) {
      pos = [1, 2];
    } else if ($li.hasClass("6")) {
      pos = [2, 0];
    } else if ($li.hasClass("7")) {
      pos = [2, 1];
    } else if ($li.hasClass("8")) {
      pos = [2, 2];
    }
    // use the position to make a move
    return pos;
  }

  setupBoard(el) {
    // it should make a grid to represent the board. Build the grid using an unordered list (<ul>). 
    let newUL = $('<ul></ul>');
    //let newLI = $('<li>A</li>');
    // let body = $('body');
    el.append(newUL);

    for(let i=0; i<9; i++) {
      // 0 1 2 
      // 3 4 5
      // 6 7 8
      // [0,0] [0, 1] [0, 2]
      // [1,0] [1, 1] [1, 2]
      // [2,0]
     let newLI = $(`<li class=${i}></li>`);
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
