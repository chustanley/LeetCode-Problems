/*
Approach
- longest path only makes sense for direct acyclic path because no loops! only one direction.
- your goal is to return the edges!!
- to end the longest path, you have to find the terminal node which contains a value of [] / no outgoing edges

- mark terminal nodes as 0's

- depth first search probably best.
*/

/*
Find the terminal nodes = nodes that are the end of the graph. Add them into a set.

Steps:
- Loop through an adjacency and add the terminal nodes to a set with a value of 0;
- Perform a depth first search on every node in an adjacency list.
- When we arrive at a node that we saw before, please return its value.

Be Careful:
- We need some max value logic when iterating through the neighbor of a node.
- We ARE trying to find the longest path of the nodes.

How to use max value logic:
- For every stack, we can have a count variable and say
*/

const longestPath = (graph) => {
  let storage = {};

  for (let key in graph) {
    if (graph[key].length === 0) storage[key] = 0;
  }

  for (let key in graph) {
    traverse(graph, key, storage);
  }

  return Math.max(...Object.values(storage));
};

const traverse = (graph, node, storage) => {
  //If the node is inside of storage, return the distance.
  //This is helpful because we return terminal nodes and nodes that we have already visited.
  if (node in storage) return storage[node];

  let maximum = 0;

  //depth first search recursive w/ finding maximum length.
  for (let neighbors of graph[node]) {
    const attempts = traverse(graph, neighbors, storage);
    if (attempts > maximum) maximum = attempts;
  }

  //change the currentNode's value with a 1 + maximum.
  storage[node] = 1 + maximum;
  return storage[node];
};

const graph = {
  a: ["b"],
  b: ["c"],
  c: [],
  e: ["f"],
  f: ["g"],
  g: ["h"],
  h: [],
};

console.log(longestPath(graph)); // -> 3
