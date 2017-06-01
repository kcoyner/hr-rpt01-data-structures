
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    let prevTuple = this._storage.get(index);
    this._storage.set(index, [k, v].concat(prevTuple));
  } else {
    this._storage.set(index, [k, v]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let tuples = this._storage.get(index);

  this._storage.each(function (elem) {
    // how to use this? elem is an array
    // console.log('elem: ', (elem));
    // console.log('elem: ', Array.isArray(elem));
  });

  for (let i = 0; i < tuples.length; i++) {
    if (k === tuples[i]) {
      return tuples[i + 1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, [k, undefined]);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



