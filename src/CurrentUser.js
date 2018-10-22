function CurrentUser(name, email, token) {
  this._name = name;
  this._email = email;
  this._token = token;
}
  
CurrentUser.prototype.getName = function() {
  return this._name;
}

CurrentUser.prototype.setName = function(updatedName) {
  this._name = updatedName
}

CurrentUser.prototype.getEmail = function() {
  return this._email;
}

CurrentUser.prototype.setEmail = function(updatedEmail) {
  this._email = updatedEmail
}

CurrentUser.prototype.getToken = function() {
  return this._token;
}

CurrentUser.prototype.setToken = function(updatedToken) {
  this._token = updatedToken;
}

module.exports = CurrentUser;


