function CurrentUser(name) {
  this._name = name;
}
  
CurrentUser.prototype.getName = function() {
  return this._name;
}

module.exports = CurrentUser;


