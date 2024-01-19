/*
Write a function, howHigh, that takes in the root of a binary tree.
The function should return a number representing the height of the tree.
The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.
If the tree is empty, return -1.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//This function will recieve the highest level of the entire tree!
/*
Return -1 if null because if both sides are -1, we find the greatest of them and add 1 to it for its level being considered
*/
const howHigh = (node) => {
  if (node === null) return -1;
  return 1 + Math.max(howHigh(node.left), howHigh(node.right));
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

howHigh(a); // -> 2
