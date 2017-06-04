var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  /* Time complexity:  O(1) */
  list.addToTail = function(value) {
    var newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
    }
    if (list.tail) {
      list.tail.next = newNode;
      list.tail = newNode;
    } else {
      list.tail = newNode;
    }
  };

  /* Time complexity:  O(1) */
  list.removeHead = function() {
    if (!list.head) {
      return null;
    } else {
      var oldHead = list.head;
      delete list.head;
      list.head = oldHead.next;
      return oldHead.value;
    }
  };

  /* Time complexity:  O(n) */
  list.contains = function(target) {
    var recurse = function (node, target) {
      if (node.value === target) {
        return true;
      } else if (node.next) {
        return recurse(node.next, target);
      } else {
        return false;
      }
    };
    return recurse(list.head, target);
  };
  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};


