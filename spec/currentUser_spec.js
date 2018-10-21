var CurrentUser = require("../src/CurrentUser")

describe(CurrentUser, function() {
  
  var currentUser;

  beforeEach(function() {
    currentUser = new CurrentUser("Alice", "ab@cd.com", "123abc");
  })
  
  it("has a name", function() {
    expect(currentUser.getName()).toEqual("Alice");
  });
});