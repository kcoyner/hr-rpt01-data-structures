// const os = require('os');
// const _ = require(`${os.homedir()}/.npm-global/lib/node_modules/underscore/underscore.js`);


var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.stackSize = 0;
  newStack.storage = {};
  _.extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.stackSize++;
  this.storage[this.stackSize] = value;
  return this.stackSize;
};

stackMethods.size = function () {
  return this.stackSize;
};

// var mystack = Stack();
// console.log(mystack);
