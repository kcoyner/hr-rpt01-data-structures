var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  /* Time complexity:  O(1) */
  list.addToHead = function(value) {
    var newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.head.previous = newNode;
      newNode.next = list.head;
      list.head = newNode;
    }
  };

  /* Time complexity:  O(1) */
  list.addToTail = function(value) {
    var newNode = Node(value);
    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    }
    if (list.tail) {
      list.tail.next = newNode;
      newNode.previous = list.tail;
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
      list.head.previous = null;
      return oldHead.value;
    }
  };

  /* Time complexity:  O(1) */
  list.removeTail = function() {
    if (!list.tail) {
      return null;
    } else {
      var oldTail = list.tail;
      delete list.tail;
      list.tail = oldTail.previous;
      list.tail.next = null;
      return oldTail.value;
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
  node.previous = null;
  return node;
};


