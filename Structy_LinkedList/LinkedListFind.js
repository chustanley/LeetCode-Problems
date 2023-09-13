/*
Write a function, linkedListFind, that takes in the head of a linked list and a target value.
The function should return a boolean indicating whether or not the linked list contains the target.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Iterative Approach
// Time: o(n)
// Space: o(1) because we only work with a total variable
const linkedListFind = (head, target) => {
  while (head !== null) {
    if (head.val === target) return true;
    head = head.next;
  }
  return false;
};

//Recursive Approach
//Time: o(n) becuase one call for every node
//Space: o(n) because of the call stack! every stack in a way is a space in the computer memory!!
const _linkedListFind = (head, target) => {
  if (head.val === target) return true;

  if (head === null) return false;

  return _linkedListFind(head.next, target) ? true : false;
};

//Test
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
a.next = b;
b.next = c;
c.next = d;
// a -> b -> c -> d
console.log(_linkedListFind(a, "c")); // true
