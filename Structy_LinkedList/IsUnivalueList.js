/*
Write a function, isUnivalueList, that takes in the head of a linked list as an argument.
The function should return a boolean indicating whether or not the linked list contains exactly one unique value.
You may assume that the input list is non-empty.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Iterative Approach
/*
n = number of nodes
Time: O(n)
Space: O(1)
*/
const isUnivalueList = (head) => {
  let consistent = head.val;
  head = head.next;
  while (head !== null) {
    if (head.val !== consistent) return false;
    head = head.next;
  }
  return true;
};

//Recursive Approach
/*
n = number of nodes
Time: O(n)
Space: O(n)
*/
const _isUnivalueList = (head, prevVal = null) => {
  if (head === null) return true;
  if (prevVal === null || prevVal === head.val) {
    return _isUnivalueList(head.next, head.val);
  } else {
    return false;
  }
};

//Test Case
const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

// 7 -> 7 -> 7

isUnivalueList(a); // true
