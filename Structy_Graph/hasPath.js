/*
Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst).
The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.
*/

/*
Approach:
- Draw out these problems.
- Acylic = no cycles / non directed path
- Depth first and Breadth first search works.


Time Complexity: O(NUMBER OF EDGES) OR O(N^2)      - We will only be traveling in the edges connected to the src arg
Space Complexity: O(NUMBER OF NODES) OR O(N)       - this is being added into the queue or stack.
*/

//Iterative Approach / STACK / Queue would just be pop and unshift or shift and push
const hasPath = (graph, src, dst) => {
  let stack = [src];

  //We will only be adding nodes that are connected through a direct path from the src
  //If we never return true, that means well eventually hit the end so after the loop we return false.
  while (stack.length !== 0) {
    let currentNode = stack.pop();

    if (currentNode === dst) return true;

    for (let neighbor of graph[currentNode]) {
      stack.push(neighbor);
    }
  }
  return false;
};

//Recursive Approach
const _hasPath = (graph, src, dst) => {
  if (src === dst) return true;

  //Looping through all the neighbors within src
  for (let neighbor of graph[src]) {
    //Recursively pass all neighbors into the function again until we find true.
    //If we dont find true, then nothing will happen within the loop and if we reach the end
    //We will return false.
    if (_hasPath(graph, neighbor, dst) === true) {
      return true;
    }
  }
  return false;
};

const graph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

console.log(hasPath(graph, "f", "k")); // true
