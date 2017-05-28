

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// {3: [3]}

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (this.storage.hasOwnProperty(node) === false) {
    this.storage[node] = [node];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage.hasOwnProperty(node) === true) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.storage.hasOwnProperty(node) === true) {
    var temp = this.storage[node];
    for (let i = 1; i < temp.length; i++) {
      this.removeEdge(node, temp[i]);
    }
    delete this.storage[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var target = this.storage[fromNode].indexOf(toNode);
  this.storage[fromNode].splice(target, 1);
  target = this.storage[toNode].indexOf(fromNode);
  this.storage[toNode].splice(target, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


