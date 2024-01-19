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

/*
Same for both.
We are both iterating and saving every encountered value in an array
We are both recursing and saving every value in an array

Time: O(n)
Space: O(n)
*/

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

const _linkedListValues = (head, result = []) => {
  if (head === null) return result;

  result.push(head.val);
  head = head.next;

  return _linkedListValues(head, result);
};

//RecursiveCase w/ helper

const __linkedListValues = (head) => {
  const resultArray = [];

  helperRecursive(head, resultArray);

  return resultArray;
};

const helperRecursive = (head, array) => {
  if (head === null) return array;

  array.push(head.val);
  helperRecursive(head.next, array);
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
