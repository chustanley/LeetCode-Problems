/*
Write a function, treeSum, that takes in the root of a binary tree that contains number values.
The function should return the total sum of all values in the tree.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//Iterative Approach / DEPTH but can also be done in BREADTH
const treeSum = (root) => {
  if (root === null) {
    return 0;
  }

  var resultNumber = 0;
  var stack = [root];

  while (stack.length > 0) {
    var node = stack.pop();

    if (node.left !== null) {
      stack.push(node.left);
    }

    if (node.right !== null) {
      stack.push(node.right);
    }
    resultNumber += node.val;
  }
  return resultNumber;
};

//Recursive Approach
const _treeSum = (root) => {
  if (root === null) return 0;
  return root.val + _treeSum(root.left) + _treeSum(root.right);
};

//TestCase
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

treeSum(a); // -> 21
