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

  tree.contains = function(value) {
    // returns true or false
    recurseContains(tree, value);
  };

  tree.depthFirstLog = function(value) {
    var arr = [];
    //arr.push(everyvalue)
    // returns an array
  };

  console.log('tree: ', tree);
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



