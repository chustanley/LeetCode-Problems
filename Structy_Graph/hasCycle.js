/*
Return a boolean if there is a cycle. True if cycle and false if no cycle.
We have to follow the direction of the path.

White grey black algorithm

White: unvisisted
Grey: visiting
Black: visited

*/

const hasCycle = (graph) => {
  const visited = new Set();

  for (let node in graph) {
    const detect = findCycle(graph, node, visited, new Set());

    if (detect === true) return true;
  }

  return false;
};

const findCycle = (graph, node, visited, visiting) => {
  if (visited.has(node)) return false;

  if (visiting.has(node)) return true;

  visiting.add(node);

  for (let neighbor of graph[node]) {
    if (findCycle(graph, neighbor, visiting, visited) === true) {
      return true;
    }
  }

  //When we reach the end and we have an empty array
  //it wont iterate anymore so we will delete the node from visitng and add it to visited
  //We return false so it goes back to the loop.
  visiting.delete(node);
  visited.add(node);
  return false;
};
