const FollowToggle = require('./follow_toggle')

// $(document).ready()


$(() => {
  const buttons = $("follow-toggle");
  const buttons_arr = [];
  buttons.each((idx, ele) => {
    buttons_arr.push(new FollowToggle(ele));
  });
  

});