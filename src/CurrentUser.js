function CurrentUser(name, email) {
  this._name = name;
  this._email = email;
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

module.exports = CurrentUser;


