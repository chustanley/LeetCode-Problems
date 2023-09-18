/*
Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB).
The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
*/

/*
Set is really good to handle cyclic paths for graph data structure.
- It has O(1) search and O(1) add
- You should add the visited nodes into the set and have it memoized

Approach:
- Iterate through the neighbors of src and add every encountered nodes in set.
- then recursively call again and only return true if src matches dst

Time Complexity: O(number of edges)
Space Complexity: O(number of nodes)

Depth first search makes more sense because we want to find the route from src to dst
*/

const hasPath = (graph, src, dst, set) => {
  if (src === dst) return true;
  if (set.has(src)) return false;

  set.add(neighbors);

  for (let neighbors of graph[src]) {
    if (hasPath(graph, neighbors, dst, set) === true) return true;
  }
  return false;
};

const createGraph = (edges) => {
  let graph = {};

  for (let neighbor of edges) {
    const [left, right] = neighbor;

    if (graph[left] === undefined) graph[left] = [];
    if (graph[right] === undefined) graph[right] = [];

    graph[left].push(right);
    graph[right].push(left);
  }
  return graph;
};

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = createGraph(edges);

  return hasPath(graph, nodeA, nodeB, new Set());
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

console.log(undirectedPath(edges, "k", "o")); // -> false
