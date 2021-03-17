

require('./ttt-view.js');
require('./solution/game.js');
const View = require('./ttt-view.js');
const Game = require('./solution/game.js');





  $(() => {
    // # container
    const tttClass = $('.ttt');

    const game = new Game();
    let view = new View(game, tttClass);
    view.bindEvents();
    // let p = $('<p>Hello!</p>');
    // let body = $('body');
    // tttClass.append(p);
    // body.append(p);
  });

