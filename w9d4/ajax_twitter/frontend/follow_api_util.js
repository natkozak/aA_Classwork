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