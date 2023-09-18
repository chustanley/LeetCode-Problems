/*
Write a function, treeIncludes, that takes in the root of a binary tree and a target value.
The function should return a boolean indicating whether or not the value is contained in the tree.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//Iterative Approach

const treeIncludes = (root, target) => {
  if (root === null) return false;

  var stack = [root];

  while (stack.length !== 0) {
    const currentNode = stack.pop();

    if (currentNode.val === target) return true;

    if (currentNode.left !== null) stack.push(currentNode.left);
    if (currentNode.right !== null) stack.push(currentNode.right);
  }
  return false;
};

//Recursive Approach

const _treeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return _treeIncludes(root.left, target) || _treeIncludes(root.right, target);
};

//Test Case
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

treeIncludes(a, "e"); // -> true
