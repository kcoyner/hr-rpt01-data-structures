var Stack = function() {
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.stackSize = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.size = function () {
  return this.stackSize;
};

stackMethods.push = function (value) {
  this.stackSize++;
  this.storage[this.stackSize] = value;
  return this.stackSize;
};

stackMethods.pop = function () {
  if (this.size() > 0) {
    var popped = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    this.stackSize--;
    return popped;
  }
};

