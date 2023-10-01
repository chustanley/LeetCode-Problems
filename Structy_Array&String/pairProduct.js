/*
Write a function, pairProduct, that takes in an array and a target product as arguments.
The function should return an array containing a pair of indices whose elements multiply to the given target.
The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair whose product is the target.
*/

const pairProduct = (numbers, targetProduct) => {
  /*
    similar to the last problem, we are going to iterate through the numbers and check if its divisor is there,

    if not, then we will add its current value and its index as its value!
  */

  var productObject = {};

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= targetProduct) {
      var divisor = targetProduct / numbers[i];

      if (productObject[divisor]) {
        return [productObject[divisor], i];
      } else {
        productObject[numbers[i]] = i;
      }
    }
  }
};

console.log(pairProduct([4, 7, 9, 2, 5, 1], 5));
