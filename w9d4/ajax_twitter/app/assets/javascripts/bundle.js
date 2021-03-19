/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_api_util.js":
/*!*************************************!*\
  !*** ./frontend/follow_api_util.js ***!
  \*************************************/
/***/ ((module) => {

const FollowAPIUtil = {
  followUser: userId => {
    return $.ajax({
      method: "POST",
      url: `/users/${userId}/follow`, // userId will be defined later
      dataType: 'json'
    });
  },

  unfollowUser: userId => {
    return $.ajax({
      method: "DELETE",
      url: `/users/${userId}/follow`, // userId will be defined later
      dataType: 'json'
    });
  }
};

module.exports = FollowAPIUtil;

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const FollowAPIUtil = __webpack_require__(/*! ./follow_api_util */ "./frontend/follow_api_util.js");

class FollowToggle {
  constructor(el) {
    this.el = $(el);
    this.userId = this.el.data("user-id");
    this.followState = this.el.data("initial-follow-state");
    this.render();
    this.handleClick();
  }

  render() {
    // debugger
    switch (this.followState) {
      case 'following':
        this.el.prop("disabled", true);
        this.el.text('Following!');
        break;
      case 'unfollowing':
        this.el.prop("disabled", true);
        this.el.text('Unfollowing!');
        break;
      case 'followed':
        this.el.prop("disabled", false);
        this.el.text('Followed!');
        break;
      case 'unfollowed':
        this.el.prop("disabled", false);
        this.el.text('Unfollowed!');
        break;
    }
  }

  handleClick() {
    this.el.on('click', (e) => {
      // debugger
      e.preventDefault();


      if (this.followState === 'followed') { // following
        this.followState = 'unfollowing';
        this.render(); // disables the button and show that it's unfollowing
        FollowAPIUtil.unfollowUser(this.userId) // this is an AJAX
        .then(() => {
          this.followState = 'unfollowed'; // unfollowing
          this.render(); // enables the button and show that it's unfollowed
        })
      }
      else if (this.followState === 'unfollowed') { // else if unfollowing
        this.followState = 'following';
        this.render(); // disables to show following
        FollowAPIUtil.followUser(this.userId) // this is also an AJAX
        .then(() => {
          this.followState = 'followed'; // following
          this.render(); // enables button to show followed
        })
      }

    });
  }


}

module.exports = FollowToggle;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js")

// $(document).ready()


$(() => {
  const buttons = $(".follow-toggle");
  const buttons_arr = [];
  buttons.each((idx, ele) => {
    buttons_arr.push(new FollowToggle(ele));
    // debugger
    // console.log(buttons_arr);
  });


  

});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map