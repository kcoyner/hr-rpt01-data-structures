
var HashTable = function() {
  this._limit = 16;
        console.log('this._limit: ', this._limit);
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  this.checkSize();
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


HashTable.prototype.getStorageSize = function() {
  var count = 0;
  this._storage.each((elem, idx) => {
    if (elem !== undefined) {
      count += elem.length / 2;
    }
  });
  return count;
};

HashTable.prototype.checkSize = function() {
  var size = this.getStorageSize();

  if (size >= (0.75 * this._limit)) {
    // instantiate new array and put old array into temp
    var temp = this._storage;
        console.log('this: ', this);
    this._limit = this._limit * 2;
    // this._storage = LimitedArray(limit);  // should be empty
    // this._newstorage = LimitedArray(limit);

    temp.each(function (elem, idx) {
      if (elem !== undefined) {
        var k = elem[0];
        var v = elem[1];
        var index = getIndexBelowMaxForKey(k, this._limit);
        this._storage.set(index, elem);
        // this._storage.insert(k, v);
      }
    }.bind(this));
  }
    console.log('this._storage: ', this._storage);

};




/*
 * Complexity: What is the time complexity of the above functions?
 */



