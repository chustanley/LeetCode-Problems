/*
Write a function, leafList, that takes in the root of a binary tree and returns an array containing
the values of all leaf nodes in left-to-right order.
*/

const leafList = (root) => {
  var resultArray = [];

  var queue = [root];

  while (queue.length > 0) {
    var node = queue.pop();

    if (node !== null) {
      if (node.left === null && node.right === null) {
        resultArray.push(node.val);
      }

      queue.push(node.right);
      queue.push(node.left);
    }
  }
  return resultArray;
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

leafList(a); // -> [ 'd', 'e', 'f' ]
