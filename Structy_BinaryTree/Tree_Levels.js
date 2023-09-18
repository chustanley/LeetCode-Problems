/*
Write a function, treeLevels, that takes in the root of a binary tree.
The function should return a 2-Dimensional array where each subarray represents a level of the tree.
*/

const treeLevels = (root) => {
  if (root === null) return [];

  const resultArray = [];

  const queue = [{ node: root, levels: 0 }];

  while (queue.length !== 0) {
    const { node, levels } = queue.pop();

    if (resultArray[levels] === undefined) {
      resultArray[levels] = [node.val];
    } else {
      resultArray[levels].push(node.val);
    }

    if (node.left !== null)
      queue.unshift({ node: node.left, levels: levels + 1 });
    if (node.right !== null)
      queue.unshift({ node: node.right, levels: levels + 1 });
  }

  return resultArray;
};

//TestCase
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

treeLevels(a); // ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]
