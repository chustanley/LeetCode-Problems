/*
Write a function, treeMinValue, that takes in the root of a binary tree that contains number values.
The function should return the minimum value within the tree.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//Iterative Approach
const treeMinValue = (root) => {
  let minimum = Infinity;

  const stack = [root];

  while (stack.length !== 0) {
    const currentNode = stack.pop();

    if (currentNode.val < minimum) minimum = currentNode.val;

    if (currentNode.left !== null) stack.push(currentNode.left);
    if (currentNode.right !== null) stack.push(currentNode.right);
  }

  return minimum;
};

//Recursive Approach
const _treeMinValue = (root) => {
  if (root === null) return Infinity;

  return Math.min(
    _treeMinValue(root.right),
    _treeMinValue(root.left),
    root.val,
  );
};

//TEST CASE
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

console.log(_treeMinValue(a)); // -> -2
