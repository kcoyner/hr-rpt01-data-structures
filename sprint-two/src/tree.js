var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

/* constant time O(1) */
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

/* linear time O(n) ????? */
treeMethods.contains = function(target) {
  var recurse = function(tree, target) {
    if (tree.value === target) {
      return true;
    } else if (tree.children) {
      for (let i = 0; i < tree.children.length; i++) {
        if (recurse(tree.children[i], target) ) {
          return true;
        }
      }
    }
    return false;
  };
  return recurse(this, target);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

