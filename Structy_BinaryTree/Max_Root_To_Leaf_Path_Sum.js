/*
Write a function, maxPathSum, that takes in the root of a binary tree that contains number values.
The function should return the maximum sum of any root to leaf path within the tree.
You may assume that the input tree is non-empty.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/*
First edgecase is for if a node has one side with null and other side with children
Second edgecase is for if both sides have null you return its value

Reason: if you have 2 -Infinity, the max of them is inifinity + a root.val will still be -Infinity
*/
const maxPathSum = (root) => {
  if (root === null) return -Infinity;

  if (root.left === null && root.right === null) return root.val;

  return root.val + Math.max(maxPathSum(root.right), maxPathSum(root.left));
};

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

console.log(maxPathSum(a)); // -> 18
