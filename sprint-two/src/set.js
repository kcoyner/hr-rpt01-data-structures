var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

// Time: Linear
setPrototype.add = function(item) {
  if (this.contains(item) === false){
    this._storage.push(item);
  }
  return this
};

// Time: Linear
setPrototype.contains = function(item) {
  return this._storage.includes(item);
};

// Time: Linear
setPrototype.remove = function(item) {
  for (let i = 0; i < this._storage.length; i++) {
    if ( this._storage[i].includes(item) === true) {
      this._storage.splice(i, 1);
      return true;
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

