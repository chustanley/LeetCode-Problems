/*
Write a function, largestComponent, that takes in the adjacency list of an undirected graph.
The function should return the size of the largest connected component in the graph.
*/

/*
Approach Overview

Iterate through the cyclic graph that you will have to create.
Iterate through it from a root function, then recursively call another function that will loop through
a island and all of its nodes and return a count

if island has been encountered before, return 0
if not, recurse through all of its related node and return a count

compare the count returned through recursion with a maximum variable with a value of 0
- if recursive coutn is greater than maximum which is 0 then replace it. then keep doing that.

*/

const largestComponent = (graph) => {
  var visited = new Set();
  var greatest = 0;

  for (var key in graph) {
    const currentIslandCount = explore(graph, key, visited);
    if (currentIslandCount > greatest) greatest = currentIslandCount;
  }
  return greatest;
};

const explore = (graph, src, visited) => {
  //what should we do if we encounter the same src already?

  if (visited.has(Number(src))) return 0;

  var count = 0;

  visited.add(Number(src));
  count++;

  var currentNode = graph[src];

  for (var key of currentNode) {
    count += explore(graph, key, visited);
  }

  return count;
};

console.log(
  largestComponent({
    0: ["8", "1", "5"],
    1: ["0"],
    5: ["0", "8"],
    8: ["0", "5"],
    2: ["3", "4"],
    3: ["2", "4"],
    4: ["3", "2"],
  }),
); // -> 4
