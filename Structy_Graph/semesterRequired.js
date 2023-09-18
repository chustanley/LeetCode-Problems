/*
Write a function, semestersRequired, that takes in a number of courses (n) and a list of prerequisites as arguments.
Courses have ids ranging from 0 through n - 1. A single prerequisite of [A, B] means that course A must be taken before course B.
Return the minimum number of semesters required to complete all n courses.
There is no limit on how many courses you can take in a single semester, as long the prerequisites of a course are satisfied before taking it.
Note that given prerequisite [A, B], you cannot take course A and course B concurrently in the same semester. You must take A in some semester before B.
You can assume that it is possible to eventually complete all courses.
*/

/*
Human Words
- Pre reqs cannot be taken at the same time, it has to be [A, B]. So A has to be in one semester and B in the next.
*/

/*
Thought process.

- Since we are talking about prereqs, a sucessor class cannot be taken first and then the preReq so that means its directed.
- Create an adjacency list
- In reality, if you draw it out, you should just get the longest path of the entire adjacecny list
*/

const createGraph = (courses) => {
  const graph = {};

  for (let nodes of courses) {
    const [nodeA, nodeB] = nodes;
    if (graph[nodeA] === undefined) graph[nodeA] = [];
    if (graph[nodeB] === undefined) graph[nodeB] = [];

    //Both nodeA and nodeB need an array because nodeB might be empty / terminal node.
    graph[nodeA].push(nodeB);
  }

  return graph;
};

const traverse = (graph, node, visited) => {
  if (visited[node] === 0) return 1;

  let maximum = 0;

  for (let neighbor of graph[node]) {
    const attempt = traverse(graph, neighbor, visited);
    if (attempt > maximum) maximum = attempt;
  }

  visited[node] = 1 + maximum;
  return visited[node];
};

const semestersRequired = (numCourses, prereqs) => {
  const list = createGraph(prereqs);
  const visited = {};

  for (let node in list) {
    if (list[node].length === 0) visited[node] = 0;
  }

  for (let node in list) {
    traverse(list, node, visited);
  }

  console.log(visited);
  return Math.max(...Object.values(visited));
};

const numCourses = 6;
const prereqs = [
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];
console.log(semestersRequired(numCourses, prereqs)); // -> 3

// var test = { 0: [5], 1: [2], 2: [4], 3: [5], 4: [], 5: [] };
