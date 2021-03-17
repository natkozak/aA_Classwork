/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n__webpack_require__(/*! ./ttt-view.js */ \"./src/ttt-view.js\");\n__webpack_require__(/*! ./solution/game.js */ \"./src/solution/game.js\");\nconst View = __webpack_require__(/*! ./ttt-view.js */ \"./src/ttt-view.js\");\nconst Game = __webpack_require__(/*! ./solution/game.js */ \"./src/solution/game.js\");\n\n\n\n\n\n  $(() => {\n    // # container\n    const tttClass = $('.ttt');\n\n    const game = new Game();\n    let view = new View(game, tttClass);\n    view.bindEvents();\n    // let p = $('<p>Hello!</p>');\n    // let body = $('body');\n    // tttClass.append(p);\n    // body.append(p);\n  });\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/solution/board.js":
/*!*******************************!*\
  !*** ./src/solution/board.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MoveError = __webpack_require__(/*! ./moveError */ \"./src/solution/moveError.js\");\n\nclass Board {\n  constructor() {\n    this.grid = Board.makeGrid();\n  }\n\n  isEmptyPos(pos) {\n    if (!Board.isValidPos(pos)) {\n      throw new MoveError('Is not valid position!');\n    }\n\n    return (this.grid[pos[0]][pos[1]] === null);\n  }\n\n  isOver() {\n    if (this.winner() != null) {\n      return true;\n    }\n\n    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {\n      for (let colIdx = 0; colIdx < 3; colIdx++) {\n        if (this.isEmptyPos([rowIdx, colIdx])) {\n          return false;\n        }\n      }\n    }\n\n    return true;\n  }\n\n  placeMark(pos, mark) {\n    if (!this.isEmptyPos(pos)) {\n      throw new MoveError('Is not an empty position!');\n    }\n\n    this.grid[pos[0]][pos[1]] = mark;\n  }\n\n  print() {\n    const strs = [];\n    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {\n      const marks = [];\n      for (let colIdx = 0; colIdx < 3; colIdx++) {\n        marks.push(\n          this.grid[rowIdx][colIdx] ? this.grid[rowIdx][colIdx] : \" \"\n        );\n      }\n      strs.push(`${marks.join('|')}\\n`);\n    }\n\n    console.log(strs.join('-----\\n'));\n  }\n\n  winner() {\n    const posSeqs = [\n      // horizontals\n      [[0, 0], [0, 1], [0, 2]],\n      [[1, 0], [1, 1], [1, 2]],\n      [[2, 0], [2, 1], [2, 2]],\n      // verticals\n      [[0, 0], [1, 0], [2, 0]],\n      [[0, 1], [1, 1], [2, 1]],\n      [[0, 2], [1, 2], [2, 2]],\n      // diagonals\n      [[0, 0], [1, 1], [2, 2]],\n      [[2, 0], [1, 1], [0, 2]]\n    ];\n\n    for (let i = 0; i < posSeqs.length; i++) {\n      const winner = this.winnerHelper(posSeqs[i]);\n      if (winner != null) {\n        return winner;\n      }\n    }\n\n    return null;\n  }\n\n  winnerHelper(posSeq) {\n    for (let markIdx = 0; markIdx < Board.marks.length; markIdx++) {\n      const targetMark = Board.marks[markIdx];\n      let winner = true;\n      for (let posIdx = 0; posIdx < 3; posIdx++) {\n        const pos = posSeq[posIdx];\n        const mark = this.grid[pos[0]][pos[1]];\n\n        if (mark != targetMark) {\n          winner = false;\n        }\n      }\n\n      if (winner) {\n        return targetMark;\n      }\n    }\n\n    return null;\n  }\n\n  static isValidPos(pos) {\n    return (0 <= pos[0]) &&\n    (pos[0] < 3) &&\n    (0 <= pos[1]) &&\n    (pos[1] < 3);\n  }\n\n  static makeGrid() {\n    const grid = [];\n\n    for (let i = 0; i < 3; i++) {\n      grid.push([]);\n      for (let j = 0; j < 3; j++) {\n        grid[i].push(null);\n      }\n    }\n\n    return grid;\n  }\n}\n\nBoard.marks = ['x', 'o'];\n\nmodule.exports = Board;\n\n\n//# sourceURL=webpack:///./src/solution/board.js?");

/***/ }),

/***/ "./src/solution/game.js":
/*!******************************!*\
  !*** ./src/solution/game.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Board = __webpack_require__(/*! ./board */ \"./src/solution/board.js\");\nconst MoveError = __webpack_require__(/*! ./moveError */ \"./src/solution/moveError.js\");\n\nclass Game {\n  constructor() {\n    this.board = new Board();\n    this.currentPlayer = Board.marks[0];\n  }\n\n  isOver() {\n    return this.board.isOver();\n  }\n\n  playMove(pos) {\n    this.board.placeMark(pos, this.currentPlayer);\n    this.swapTurn();\n  }\n\n  promptMove(reader, callback) {\n    const game = this;\n\n    this.board.print();\n    console.log(`Current Turn: ${this.currentPlayer}`);\n\n    reader.question('Enter rowIdx: ', rowIdxStr => {\n      const rowIdx = parseInt(rowIdxStr);\n      reader.question('Enter colIdx: ', colIdxStr => {\n        const colIdx = parseInt(colIdxStr);\n        callback([rowIdx, colIdx]);\n      });\n    });\n  }\n\n  run(reader, gameCompletionCallback) {\n    this.promptMove(reader, move => {\n      try {\n        this.playMove(move);\n      } catch (e) {\n        if (e instanceof MoveError) {\n          console.log(e.msg);\n        } else {\n          throw e;\n        }\n      }\n\n      if (this.isOver()) {\n        this.board.print();\n        if (this.winner()) {\n          console.log(`${this.winner()} has won!`);\n        } else {\n          console.log('NO ONE WINS!');\n        }\n        gameCompletionCallback();\n      } else {\n        // continue loop\n        this.run(reader, gameCompletionCallback);\n      }\n    });\n  }\n\n  swapTurn() {\n    if (this.currentPlayer === Board.marks[0]) {\n      this.currentPlayer = Board.marks[1];\n    } else {\n      this.currentPlayer = Board.marks[0];\n    }\n  }\n\n  winner() {\n    return this.board.winner();\n  }\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/solution/game.js?");

/***/ }),

/***/ "./src/solution/moveError.js":
/*!***********************************!*\
  !*** ./src/solution/moveError.js ***!
  \***********************************/
/***/ ((module) => {

eval("\nconst MoveError = function (msg) { this.msg = msg; };\n\n// MoveError really should be a child class of the built in Error object provided\n// by Javascript, but since we haven't covered inheritance yet, we'll just\n// let it be a vanilla Object for now!\n\nmodule.exports = MoveError;\n\n\n//# sourceURL=webpack:///./src/solution/moveError.js?");

/***/ }),

/***/ "./src/ttt-view.js":
/*!*************************!*\
  !*** ./src/ttt-view.js ***!
  \*************************/
/***/ ((module) => {

eval("class View {\n  constructor(game, $el) {\n    this.setupBoard($el);\n    this.game = game;\n  }\n\n  bindEvents() {\n    // make a click event\n    // when they click on an A, make that register as a move\n    const li = $('li')\n    li.on('click', (e) => {\n      \n      $(e.target).addClass('played');\n      this.game.playMove(this.makeMove($(e.target))); // change to $(e.target) here too\n      $(e.target).text(this.game.currentPlayer);\n      $(e.target).addClass(`${this.game.currentPlayer}`);\n       if (this.game.isOver()) {\n         $(() => alert(`${this.game.currentPlayer} won!`)) \n       }\n      \n    })\n  }\n\n  makeMove($li) {\n    // make a pos variable\n    let pos = [];\n    // find the right pos value depending on the li element\n    if ($li.hasClass(\"0\")) {\n      pos = [0, 0];\n    } else if ($li.hasClass(\"1\")) {\n      pos = [0, 1];\n    } else if ($li.hasClass(\"2\")) {\n      pos = [0, 2];\n    } else if ($li.hasClass(\"3\")) {\n      pos = [1, 0];\n    } else if ($li.hasClass(\"4\")) {\n      pos = [1, 1];\n    } else if ($li.hasClass(\"5\")) {\n      pos = [1, 2];\n    } else if ($li.hasClass(\"6\")) {\n      pos = [2, 0];\n    } else if ($li.hasClass(\"7\")) {\n      pos = [2, 1];\n    } else if ($li.hasClass(\"8\")) {\n      pos = [2, 2];\n    }\n    // use the position to make a move\n    return pos;\n  }\n\n  setupBoard(el) {\n    // it should make a grid to represent the board. Build the grid using an unordered list (<ul>). \n    let newUL = $('<ul></ul>');\n    //let newLI = $('<li>A</li>');\n    // let body = $('body');\n    el.append(newUL);\n\n    for(let i=0; i<9; i++) {\n      // 0 1 2 \n      // 3 4 5\n      // 6 7 8\n      // [0,0] [0, 1] [0, 2]\n      // [1,0] [1, 1] [1, 2]\n      // [2,0]\n     let newLI = $(`<li class=${i}></li>`);\n     newUL.append(newLI);\n    }\n\n\n    // The cells can be represented inside the grid using <li> elements. \n\n    // By giving the <ul> a display property of flex, giving it a fixed width, and setting flex-wrap: wrap the <li> elements will appear as a 3x3 grid. \n\n    // (You need to do some quick division or tinkering to figure out how wide the <li> elements need to be). \n\n    // Set a border on the cells to make it look like a real grid. \n\n    // Style unclicked cells with a gray background. \n\n    // Change the background to yellow while the user :hovers over an unclicked cell.\n  }\n}\n\n\nmodule.exports = View;\n\n\n//# sourceURL=webpack:///./src/ttt-view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;