

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // must add to bucket array but presently it overwrites
  // i tried wrapping k,v in a function that pushed into storage[]
  // because this is set:  storage[index] = value;
  this._storage.set(index, [k, v]);
  // this._storage.set(index, function (k,v) { storage.push([k,v]); });
  console.log('this._storage: ', this._storage);
  // this._storage is an object with storage being an array and 3 methods
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // must loop thru to find proper value
  // console.log('index: ', index);
  this._storage.each(function (index) {
    console.log('index: ', index);
  });
  return this._storage.get(index)[1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, [k, undefined]);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


