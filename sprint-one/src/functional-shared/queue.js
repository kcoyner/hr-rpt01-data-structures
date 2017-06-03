var Queue = function() {
  var newQueue = {};
  newQueue.front = 0;
  newQueue.back = 0;
  newQueue.storage = {};
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.back] = value;
  this.back++;
  return this.size();
};

queueMethods.dequeue = function () {
  if (this.size() > 0) {
    var dequeued = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return dequeued;
  }
};

queueMethods.size = function () {
  return this.back - this.front;
};
