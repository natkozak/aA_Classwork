const APIUtil = require("./api_util");

class UsersSearch {
  constructor(el) {
    this.el = $(el); // nav is the el
    this.input = $('nav input');
    this.ul = $(".users");
    this.handleInput();
  }

  handleInput() {
    this.input.on("change", (e) => {
      APIUtil.searchUsers(this.input.val())
        .then(
        )
    });
    // On each input event, call APIUtil.searchUsers, sending the input's val as the query parameter. 
    // Don't forget to chain a success callback!


  }

}

module.exports = UsersSearch;