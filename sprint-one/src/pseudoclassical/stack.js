var Stack = function() {
  this.storage = {};
  this.stackSize = 0;
};

Stack.prototype.size = function () {
  return this.stackSize;
};

Stack.prototype.push = function (value) {
  this.stackSize++;
  this.storage[this.stackSize] = value;
  return this.stackSize;
};

Stack.prototype.pop = function () {
  if (this.stackSize > 0) {
    var popped = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    this.stackSize--;
    return popped;
  }
};
