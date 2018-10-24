var CurrentUser = require("../src/CurrentUser")

describe(CurrentUser, function() {
  
  var currentUser;

  beforeEach(function() {
    currentUser = new CurrentUser(1, "Alice", "ab@cd.com", "123abc");
  })
  
  it("has a name", function() {
    expect(currentUser.getName()).toEqual("Alice");
  });
  
  it("can change a name", function() {
    currentUser.setName("Bob")
    expect(currentUser.getName()).toEqual("Bob");
  });

  it("has an email", function() {
    expect(currentUser.getEmail()).toEqual("ab@cd.com");
  });

  it("can change an email", function() {
    currentUser.setEmail("123@abc.com")
    expect(currentUser.getEmail()).toEqual("123@abc.com");
  });

  it("has a token", function() {
    expect(currentUser.getToken()).toEqual("123abc");
  });

  it("can change a token", function() {
    currentUser.setToken("qwerty12345")
    expect(currentUser.getToken()).toEqual("qwerty12345");
  });
});