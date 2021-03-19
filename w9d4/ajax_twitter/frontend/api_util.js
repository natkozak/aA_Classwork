const APIUtil = {
  searchUsers: queryVal => {
    return $.ajax({
      method: "GET",
      url: `/users/search`,
      dataType: 'json'
    });
  }
};

module.exports = APIUtil;

//"You can send query parameters along with an $.ajax call through the data."???