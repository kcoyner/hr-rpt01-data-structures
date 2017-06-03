var Queue = function() {
  this.front = 0;
  this.back = 0;
  this.storage = {};
};

Queue.prototype.size = function () {
  return this.back - this.front;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.back] = value;
  this.back++;
  return this.size();
};

Queue.prototype.dequeue = function () {
  if (this.size() > 0) {
    var dequeued = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return dequeued;
  }
};
