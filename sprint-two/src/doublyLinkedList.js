var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
// previous is to the head and next is to the tail

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
    // if no head
      // set new Node to Head
    // if head
      //  set list.head.previous to newNode
      //  newNode.next is the currentHead(old head)
      //  head gets assigned newNode
  }

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

  list.contains = function(target) {

    // if (list.head.value === target) {
    //   return true;
    // }

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

/*
 * Complexity: What is the time complexity of the above functions?
 */

