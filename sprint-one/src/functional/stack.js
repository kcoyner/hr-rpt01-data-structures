var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    size++;
    storage[size] = value;
    return size;
  };

  someInstance.pop = function() {
    if (size > 0) {
      var popped = storage[size];
      delete storage[size];
      size--;
      return popped;
    }
  };

  someInstance.size = function() {
    return size;

  };

  return someInstance;
};

