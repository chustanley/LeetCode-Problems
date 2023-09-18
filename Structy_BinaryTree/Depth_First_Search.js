/*
Write a function, depthFirstValues, that takes in the root of a binary tree.
The function should return an array containing all values of the tree in depth-first order
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/*
Depth First Search is when the search goes all the way down first
This can only be done with a stack and recursion NOT queue
*/

//Iterative Case
const depthFirstValues = (root) => {
  if (root === null) return [];

  var resultArray = [];

  const stack = [root];

  while (stack.length !== 0) {
    const currentNode = stack.pop();

    resultArray.push(currentNode.val);

    if (currentNode.left !== null) stack.push(currentNode.left);
    if (currentNode.right !== null) stack.push(currentNode.right);
  }

  return resultArray;
};

//Recursive Case
const _depthFirstValues = (root) => {
  if (root === null) return [];

  const leftValues = _depthFirstValues(root.left);
  const rightValues = _depthFirstValues(root.right);
  return [root.val, ...leftValues, ...rightValues];
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

console.log(depthFirstValues(a));
//    -> ['a', 'b', 'd', 'e', 'c', 'f']
