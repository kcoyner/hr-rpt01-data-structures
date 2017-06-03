var BinarySearchTree = function(value) {

  var tree = new Node(value);

  var recurse = function (node, target) {
    if (target > node.value) {
      if (node.right === null) {
        node.right = new Node(target);
      } else {
        recurse(node.right, target);
      }
    }
    if (target < node.value) {
      if (node.left === null) {
        node.left = new Node(target);
      } else {
        recurse(node.left, target);
      }
    }
  };

  tree.insert = function(value) {
    recurse(tree, value);
  };

  var recurseContains = function (node, target) {
    if (node.value === target) {
      return true;
    }
    if (target > node.value) {
      if (node.right === null) {
        return false;
      } else {
        return recurseContains(node.right, target);
      }
    }
    if (target < node.value) {
      if (node.left === null) {
        return false;
      } else {
        return recurseContains(node.left, target);
      }
    }
  };

  tree.contains = function(value) {
    return recurseContains(tree, value);
  };

  var recurseLog = function (node, cb) {
    cb(node.value);
    if (node.left) {
      recurseLog(node.left, cb);
    }
    if (node.right) {
      recurseLog(node.right, cb);
    }
  };

  tree.depthFirstLog = function(cb) {
    return recurseLog(tree, cb);
  };

  return tree;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */



var Node = function(value) {
  var node = {};

  node.value = value;
  node.right = null;
  node.left = null;

  return node;
};



