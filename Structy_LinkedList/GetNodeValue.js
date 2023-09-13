/*
Write a function, getNodeValue, that takes in the head of a linked list and an index.
The function should return the value of the linked list at the specified index.
If there is no node at the given index, then return null.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Iterative approach
// Time: o(n)
// Space: o(1) because we only work with a total variable
const getNodeValue = (head, index) => {
  let count = 0;
  while (head !== null) {
    if (count === index) return head.val;
    head = head.next;
    count++;
  }
  return null;
};

//Recursive approach
//Time: o(n) becuase one call for every node
//Space: o(n) because of the call stack! every stack in a way is a space in the computer memory!!
const _getNodeValue = (head, index, count = 0) => {
  if (head === null) return null;
  if (index === count) return head.val;
  count++;
  return _getNodeValue(head.next, index);
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
getNodeValue(a, 2); // 'c'
