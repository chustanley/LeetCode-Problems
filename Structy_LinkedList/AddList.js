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
    //if the head is null, replace it with a 0
    var current1 = head1 === null ? 0 : head1.val;
    var current2 = head2 === null ? 0 : head2.val;

    //Because extra is a global variable, and line 31 assigns it the remainder. we can add it here
    var addNodes = current1 + current2 + extra;
    extra = addNodes > 9 ? 1 : 0;

    //Getting the modulo 10 of a lower number does nothing but getting a modulo of any number greater than 10 will drop its 'first val'
    //19 % 10 = 9
    var newNode = new Node(addNodes % 10);

    //if undefined assign the start and end with the values
    if (resultNode === undefined) {
      resultNode = newNode;
      lastNode = resultNode;
    } else {
      //Keep moving its pointers to the newNode and then reassign the tail to be its .next
      lastNode.next = newNode;
      lastNode = lastNode.next;
    }

    head1 = head1 === null ? null : head1.next;
    head2 = head2 === null ? null : head2.next;
  }

  return resultNode;
};

const recursive = (head1, head2, carry = 0) => {
  if (head1 === null && head2 === null && carry === 0) return null;

  const val1 = head1 === null ? 0 : head1.val;
  const val2 = head2 === null ? 0 : head2.val;

  const sum = val1 + val2 + carry;
  const nextCarry = sum > 9 ? 1 : 0;
  const digit = sum % 10;
  const result = new Node(digit);

  const next1 = head1 === null ? null : head1.next;
  const next2 = head2 === null ? null : head2.next;

  result.next = addLists(next1, next2, nextCarry);

  return result;
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
