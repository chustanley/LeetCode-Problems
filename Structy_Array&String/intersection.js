/*
    Set gives O(1) search and O(1) insertion: turns array specifically into a hashmap

    Overall: turn one of them into a hashmap. doesnt matter which through set.
    then iterate through another one and then check if the set .has it and if it does, push it to an array.
    return the array.

    You can use bruteForce 'includes' which technically is already another loop so this one will cause a time out since its a*b complex
    Brute Force Time Complexity
    - Time: O(n*m) because nested loop w/ includes
    - Space: O(min(n, m)) becuase we store the lowest one.



    Complexity Overview:
    Time Complexity: o(a.length + b.length) becuase newSet() is a loop for the first array and the loop is the loop for 2nd array
    Space Complexity: O(n)

  */

const intersection = (a, b) => {
  var comparisonFactor = new Set(a); // This is O(n) because we have to go through the array. but the insertion is o(1)

  var resultArray = [];

  for (var i = 0; i < b.length; i++) {
    if (comparisonFactor.has(b[i])) {
      //O(1) lookup
      resultArray.push(b[i]);
    }
  }
  return resultArray;
};

console.log(intersection([4, 2, 1], [1, 2, 4, 6]));
