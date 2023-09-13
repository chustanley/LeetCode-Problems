/*
Write a function, sumList, that takes in the head of a linked list containing numbers as an argument.
The function should return the total sum of all values in the linked list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Iterative Case
// Time: o(n)
// Space: o(1) because we only work with a total variable
const sumList = (head) => {
  let total = 0;

  while (head !== null) {
    total += head.val;
    head = head.next;
  }
  return total;
};

//Recursive Case
//Time: o(n) becuase one call for every node
//Space: o(n) because of the call stack! every stack in a way is a space in the computer memory!!
const _sumList = (head) => {
  if (head === null) return 0;
  return head.val + _sumList(head.next);
};

//Test Case
const a = new Node(2);
const b = new Node(8);
const c = new Node(3);
const d = new Node(-1);
const e = new Node(7);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
// 2 -> 8 -> 3 -> -1 -> 7
sumList(a); // 19

const x = new Node(38);
const y = new Node(4);
x.next = y;
// 38 -> 4
sumList(x); // 42

const z = new Node(100);
// 100
sumList(z); // 100

sumList(null); // 0
