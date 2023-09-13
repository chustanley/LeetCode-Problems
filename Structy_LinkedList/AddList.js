/*
Write a function, addLists, that takes in the head of two linked lists, each representing a number.
The nodes of the linked lists contain digits as values.
The nodes in the input lists are reversed; this means that the least significant digit of the number is the head.
The function should return the head of a new linked listed representing the sum of the input lists.
The output list should have its digits reversed as well.
You must do this by traversing through the linked lists once.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Iterative
const addLists = (head1, head2) => {
  var resultNode;
  var lastNode;
  var extra = 0;

  while (head1 !== null || head2 !== null || extra !== 0) {
    var current1 = head1 === null ? 0 : head1.val;
    var current2 = head2 === null ? 0 : head2.val;
    var addNodes = current1 + current2 + extra;
    extra = addNodes > 9 ? 1 : 0;
    var newNode = new Node(addNodes % 10);

    if (resultNode === undefined) {
      resultNode = newNode;
      lastNode = resultNode;
    } else {
      lastNode.next = newNode;
      lastNode = lastNode.next;
    }

    head1 = head1 === null ? null : head1.next;
    head2 = head2 === null ? null : head2.next;
  }

  return resultNode;
};

//TestCase

//   621
// + 354
// -----
//   975

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(6);
a1.next = a2;
a2.next = a3;
// 1 -> 2 -> 6

const b1 = new Node(4);
const b2 = new Node(5);
const b3 = new Node(3);
b1.next = b2;
b2.next = b3;
// 4 -> 5 -> 3

addLists(a1, b1);
// 5 -> 7 -> 9
