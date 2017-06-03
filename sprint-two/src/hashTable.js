
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)) {
    let prevTuple = this._storage.get(index);
    this._storage.set(index, [k, v].concat(prevTuple));
  } else {
    this._storage.set(index, [k, v]);
  }
  this._count++;
  if (this._count >= 0.75 * this._limit) {
    this.rebuild('increase');
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let tuples = this._storage.get(index);
  if (tuples) {
    for (let i = 0; i < tuples.length; i++) {
      if (k === tuples[i]) {
        return tuples[i + 1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tempArr = this._storage.get(index);
  tempArr.splice(tempArr.indexOf(k), 2);
  this._storage.set(index, tempArr);
  this._count--;
  if (this._count < 0.25 * this._limit) {
    this.rebuild('decrease');
  }
};

HashTable.prototype.rebuild = function(modify) {
  var tempHashTable = new HashTable();
  if (modify === 'increase') {
    tempHashTable._limit = this._limit * 2;
  } else {
    tempHashTable._limit = this._limit * .5;
  }
  tempHashTable._storage = LimitedArray(tempHashTable._limit);
  this._storage.each(function(bucket) { // storage[index], index, storage
    if (bucket !== undefined) {
      for (let i = 0; i < bucket.length; i += 2) {
        tempHashTable.insert(bucket[i], bucket[i + 1]);
      }
    }
  });
  this._storage = tempHashTable._storage;
  this._limit = tempHashTable._limit;
  this._count = tempHashTable._count;
};


