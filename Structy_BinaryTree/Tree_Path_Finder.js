/*
Write a function, pathFinder, that takes in the root of a binary tree and a target value.
The function should return an array representing a path to the target value.
If the target value is not found in the tree, then return null.
You may assume that the tree contains unique values.
*/

const pathFinder = (root, target) => {
  const result = pathFinderHelper(root, target);

  if (result === null) {
    return null;
  } else {
    return result.reverse();
  }
};

/*
We recurse on the left side, we recurse on the right side

Every right will have to have come from a left and every left must have come from a right (except for 2nd level)

If none of these returned anything, then we will return null.

If one of the sides return something, that means that the value was found and thats because of our if statement indicating that we will push and return to the array if it wasnt null
*/

const pathFinderHelper = (root, target) => {
  if (root === null) return null;

  if (root.val === target) return [root.val];

  const leftSide = pathFinderHelper(root.left, target);
  if (leftSide !== null) {
    leftSide.push(root.val);
    return leftSide;
  }

  const rightSide = pathFinderHelper(root.right, target);
  if (rightSide !== null) {
    rightSide.push(root.val);
    return rightSide;
  }

  return null;
};

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

pathFinder(a, "h"); // -> ['a', 'c', 'f', 'h']
