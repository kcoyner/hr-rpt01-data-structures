var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.front = 0;
  newQueue.back = 0;
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.back] = value;
  this.back++;
  return this.size();
};

queueMethods.size = function () {
  return this.back - this.front;
};

queueMethods.dequeue = function () {
  if (this.size() > 0) {
    var dequeued = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return dequeued;
  }
};

