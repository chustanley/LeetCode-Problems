/*
Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph.
The function should return the number of connected components within the graph.

Basically, return island COUNTS of these graphs.
*/

/*
Approach:
- Have a new set to keep track of the cycle
- Iterate through the graph / all of the nodes / only increment count by 1 if recursion returns true;

- Recursion: if the set has the node, return false. This will not do anything but have the base
function for loop keep iterating through the object until we find another node

Overview: the seperate recursive func will iterate through all the possible nodes from one src node
and update the set. When we reach the end of a 'island' we will return all true.

- when the recursive function returns back to the root function, our set would have been updated
and we wont recurse again until we havent 'seen the node before' and therefore its a new island.
*/

const connectedComponentsCount = (graph) => {
  //This set is going to give us o(1) lookup and insertion
  const visited = new Set();

  //We are going to increment the count++ only if the explore function returns true;
  let count = 0;

  for (let key in graph) {
    if (explore(graph, key, visited) === true) count++;
  }

  return count;
};

/*
How this algorithm works.

Graph: adjacency list / no need to create one
Src: this is going to be the keys from the graph, we are iterating through the graph
Visited: this is going to be the set. This is important because we are passing it into here and modifying it as well.

*/
const explore = (graph, src, visited) => {
  //After recursively going through one key and finding the 'island' we have updated the visited set with data.
  //Now when we return back to the connectedComponentsCount func, we will then be at index 1 / the second key
  //From there we will recursively call explore again and thats fine because if the key has been called before, it will return false
  //If returned false within connectedComponentCount, we will not increment the count;
  if (visited.has(Number(src)) === true) return false;

  //We will add every src we encounter
  visited.add(Number(src));

  //We will now loop through the neighbors of the current node and recursively call it again.
  var currentNode = graph[src];

  for (let neighbor of currentNode) {
    //Its important we dont do anything here. we are just recursively calling the neighors until we explored all possible neighbors.
    explore(graph, neighbor, visited);
  }

  //Important to return true in the end because if we didnt return false at the top, that means it is technically an island and we have to consider it

  return true;
};

console.log(
  connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2],
  }),
); // -> 2
