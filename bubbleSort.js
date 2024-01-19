const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      const current = arr[i];
      const next = arr[i + 1];

      arr[i] = next;
      arr[i + 1] = current;

      return bubbleSort(arr);
    }
  }
  return arr;
};

console.log(bubbleSort([9, 8, 7, 6, 5, 1000]));
