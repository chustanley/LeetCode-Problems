/*
Write a function, insertNode, that takes in the head of a linked list, a value, and an index.
The function should insert a new node with the value into the list at the specified index.
Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

Do this in-place.

You may assume that the input list is non-empty and the index is not greater than the length of the input list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Iterative Approach
const insertNode = (head, value, index) => {
  let count = 0;
  if (index === 0) {
    const firstNode = new Node(value);
    firstNode.next = head;
    return firstNode;
  }

  const start = head;
  let end = start;

  while (head !== null) {
    count++;

    if (count === index) {
      const insertionNode = new Node(value);
      insertionNode.next = head.next;
      end.next = insertionNode;
      return start;
    }

    end = end.next;
    head = head.next;
  }
};

//Recursive Approach
const _insertNode = (head, value, index, count = 0) => {
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }

  if (count === index - 1) {
    const next = head.next;
    head.next = new Node(value);
    head.next.next = next;
    return head;
  }

  _insertNode(head.next, value, index, count + 1);
  return head;
};

//Test Case
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, "x", 2);
// a -> b -> x -> c -> d
