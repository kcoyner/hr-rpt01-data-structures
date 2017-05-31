

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check to see if index has an entry already
  // if it has an entry, we'll rebuild the v argument
  // this._storage.set(index, [[k, v],[k2,v2],[k3,v3]]); // [k,v]
  var tempArr = [];
  tempArr.push(this._storage.get(index));
  this._storage.set(index, [k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



