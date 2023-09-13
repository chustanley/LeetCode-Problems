/*
Write a function, linkedListValues, that takes in the head of a linked list as an argument.
The function should return an array containing all values of the nodes in the linked list.
*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Iterative Case

const linkedListValues = (head) => {
  const resultArray = [];

  while (head !== null) {
    resultArray.push(head.val);
    head = head.next;
  }
  return resultArray;
};

//Recursive Case

const _linkedListValues = (head) => {
  if (head === null) return [];

  const resultArray = [];

  return recursiveFunc(head, resultArray);
};

const recursiveFunc = (head, storage) => {
  if (head === null) return;

  storage.push(head.val);

  recursiveFunc(head.next, storage);

  return storage;
};

/* TEST CASE */

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

console.log(_linkedListValues(a)); // -> [ 'a', 'b', 'c', 'd' ]

const x = new Node("x");
const y = new Node("y");

x.next = y;

// x -> y

console.log(linkedListValues(x)); // -> [ 'x', 'y' ]

const q = new Node("q");

// q

console.log(linkedListValues(q)); // -> [ 'q' ]

console.log(linkedListValues(null)); // -> [ ]
