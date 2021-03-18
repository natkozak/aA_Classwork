class FollowToggle {
  constructor(el) {
    this.el = $(el);
    this.userId = this.el.data("user-id");
    this.followState = this.el.data("initial-follow-state");
    this.render();
  }

  render() {
    if (this.followState) {
      this.el.text('Unfollow!');
      // this.followState = false;
    }
    else {
      this.el.text('Follow!');
      // this.followState = true;
    }
  }

  handleClick() {
    this.el.on('click', (e) => {
      debugger
      e.preventDefault();

      const followUser = function(userId) {
        return $.ajax({
          method: "POST",
          url: `/users/${userId}/follow`, // userId will be defined later
          dataType: 'json'
        });
      }

      const unfollowUser = function(userId) {
        return $.ajax({
          method: "DELETE",
          url: `/users/${userId}/follow`, // userId will be defined later
          dataType: 'json'
        });
      }

      if (this.followState) {
        unfollowUser(this.userId) // this is an AJAX
        .then(() => {
          this.followState = false;
          this.render();
        })
      }
      else {
        followUser(this.userId) // this is also an AJAX
        .then(() => {
          this.followState = true;
          this.render();
        })
      }

    });
  }


}

module.exports = FollowToggle;
