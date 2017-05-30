

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  console.log('this.: ', this._storage.get(index));
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log('index: ', index);
  this._storage.set(index, undefined);

  // this._storage.each(function (target) {
  //   // k is index position.  remove it or splice it
  //   if (target) {
  //     // console.log('k: ', k);
  //     target = undefined;
  //   }
  // });

};



/*
 * Complexity: What is the time complexity of the above functions?
 */


