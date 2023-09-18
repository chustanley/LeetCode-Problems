/*
Write a function, shortestPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB).
The function should return the length of the shortest path between A and B.
Consider the length as the number of edges in the path, not the number of nodes.
If there is no path between A and B, then return -1.
*/

/*
Approach Overview

We will be working with a cylic / undirected graph. we want to find the shortest path from SRC to DIR

Create adjacency list with external function

Use queue data structure because we want to spread the path not go direcly down one path.
Use set to create visited and add the src node into it.

inside of the queue, we add {node: src, count: 0}

We iterate

if the set doesnt contains the src, add it to queue with a + 1

before the loop, add if src === dir return count!

outside of the main loop, return -1

*/

const shortestPath = (edges, nodeA, nodeB) => {
  var graph = createGraph(edges);
  var visited = new Set([nodeA]);

  var queue = [{ node: nodeA, count: 0 }];

  while (queue.length > 0) {
    const { node, count } = queue.pop();

    if (node === nodeB) {
      return count;
    }

    for (var key of graph[node]) {
      if (visited.has(key) === false) {
        visited.add(key);
        queue.unshift({ node: key, count: count + 1 });
      }
    }
  }
  return -1;
};

const createGraph = (edges) => {
  var graph = {};

  for (var key of edges) {
    const [nodeA, nodeB] = key;

    if (!graph[nodeA]) graph[nodeA] = [];
    if (!graph[nodeB]) graph[nodeB] = [];

    graph[nodeA].push(nodeB);
    graph[nodeB].push(nodeA);
  }
  return graph;
};

//TestCase
const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

console.log(shortestPath(edges, "w", "z")); // -> 2
