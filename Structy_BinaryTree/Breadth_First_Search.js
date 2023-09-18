/*
Write a function, breadthFirstValues, that takes in the root of a binary tree.
The function should return an array containing all values of the tree in breadth-first order.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/*
This can only be done iteratively and not with a stack ONLY queue
*/

const breadthFirstValues = (root) => {
  if (root === null) {
    return [];
  }

  var resultArray = [];

  var storage = [root];

  while (storage.length !== 0) {
    var currentNode = storage.pop();

    resultArray.push(currentNode.val);

    if (currentNode.left !== null) storage.unshift(currentNode.left);

    if (currentNode.right !== null) storage.unshift(currentNode.right);
  }
  return resultArray;
};

//TEST CASE
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

breadthFirstValues(a);
//    -> ['a', 'b', 'c', 'd', 'e', 'f']
