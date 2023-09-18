/*
Write a function, prereqsPossible, that takes in a number of courses (n) and prerequisites as arguments.
Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B.
The function should return a boolean indicating whether or not it is possible to complete all courses.
*/

/*
Stanley's thoughts

1. turn the graph into a directed adjacency list
2. iterate through the list, passing the key of every item into a cycle detection function
3. create cycle detection function by passing in a empty set.

*/

const prereqsPossible = (numCourses, prereqs) => {
  const list = createList(prereqs);

  const visited = new Set();

  for (let req in list) {
    const cycle = hasCycle(list, req, visited, new Set());
    if (cycle === true) return false;
  }

  return true;
};

const hasCycle = (classes, prereq, visited, visiting) => {
  if (visited.has(prereq)) return false;
  if (visiting.has(prereq)) return true;

  visiting.add(prereq);

  for (let neighbor of classes[prereq]) {
    if (hasCycle(classes, neighbor, visited, visiting)) return true;
  }

  visited.add(prereq);
  visiting.delete(prereq);
  return false;
};

const createList = (preReqs) => {
  let graph = {};

  for (let classes of preReqs) {
    console.log(classes);
    const [classA, classB] = classes;

    if (graph[classA] === undefined) graph[classA] = [];
    if (graph[classB] === undefined) graph[classB] = [];
    graph[classA].push(classB);
  }

  return graph;
};

const numCourses = 6;
const prereqs = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
];
console.log(prereqsPossible(numCourses, prereqs)); // -> true
