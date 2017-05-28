

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// {3: [3]}

// Add a node to the graph, passing in the node's value.
// Time complexity:  constant time
Graph.prototype.addNode = function(node) {
  if (this.storage.hasOwnProperty(node) === false) {
    this.storage[node] = [node];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
// Time complexity:  O(1) constant time
Graph.prototype.contains = function(node) {
  if (this.storage.hasOwnProperty(node) === true) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
// Time complexity: quardratic time O(n2).
Graph.prototype.removeNode = function(node) {
  if (this.storage.hasOwnProperty(node) === true) {
    var temp = this.storage[node];
    for (let i = 1; i < temp.length; i++) { // 0(n)
      this.removeEdge(node, temp[i]); // 0(n)
    }
    delete this.storage[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// Time complexity:  O(n) linear time
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
// Time complexity:  O(1) constant time
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
// Time complexity:  O(n) linear time
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var target = this.storage[fromNode].indexOf(toNode);
  this.storage[fromNode].splice(target, 1);
  target = this.storage[toNode].indexOf(fromNode);
  this.storage[toNode].splice(target, 1);
};

// Pass in a callback which will be executed on each node of the graph.
// Time complexity:  O(n) linear time
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.storage) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


