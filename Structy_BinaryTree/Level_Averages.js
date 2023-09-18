class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/*
Write a function, levelAverages, that takes in the root of a binary tree that contains number values.
The function should return an array containing the average value of each level.
*/

const levelAverages = (root) => {
  var levels = [];

  fillLevels(root, levels);

  var result = [];

  for (var key of levels) {
    result.push(calculateAverage(key));
  }

  return result;
};

const fillLevels = (root, levels) => {
  let queue = [{ node: root, level: 0 }];

  while (queue.length !== 0) {
    const { node, level } = queue.pop();

    if (levels[level] === undefined) {
      levels[level] = [node.val];
    } else {
      levels[level].push(node.val);
    }

    if (node.left !== null)
      queue.unshift({ node: node.left, level: level + 1 });
    if (node.right !== null)
      queue.unshift({ node: node.right, level: level + 1 });
  }
};

const calculateAverage = (array) => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
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

console.log(levelAverages(a)); // -> [ 3, 7.5, 1 ]
