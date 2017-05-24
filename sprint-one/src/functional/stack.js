var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    return size++;
  };

  someInstance.pop = function() {
    if (size > 0) {
      let maxKey = Object.keys(storage).slice(-1);
      result = storage[maxKey];
      delete storage[maxKey];
      size--;
      return result;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
