/*
Write a function, bottomRightValue, that takes in the root of a binary tree.
The function should return the right-most value in the bottom-most level of the tree.
You may assume that the input tree is non-empty.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//Do a breadth first search and when the queue has no more items in it, and the node has no left or right, return.
//This depends on the structure of your unshift. (which side your unshifting first)

const bottomRightValue = (root) => {
  var resultArray = [root];

  while (resultArray.length > 0) {
    var node = resultArray.pop();

    if (node.left !== null) {
      resultArray.unshift(node.left);
    }

    if (node.right !== null) {
      resultArray.unshift(node.right);
    }

    //This is possible because we unshift and pop. meaning that at length 0 w/right and left being null
    //it has to be the most bottom right node
    if (resultArray.length === 0 && node.right === null && node.left === null) {
      return node.val;
    }
  }
};

//Test Case
const a = new Node(3);
const b = new Node(11);
const c = new Node(10);
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
//   11     10
//  / \      \
// 4   -2     1

bottomRightValue(a); // -> 1
