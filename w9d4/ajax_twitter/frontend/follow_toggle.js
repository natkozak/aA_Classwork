const FollowAPIUtil = require("./follow_api_util");

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
