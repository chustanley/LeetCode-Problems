const isPrime = (n) => {
  // todo

  /*
  If you think about it, 2, 3, 5 are the main numbers that can go into something in division

  EX: 99 / 3 = 33
  EX: 25 / 5 = 5
  EX: ANY EVEN / 2 = half

  1 = FALSE;
  2 = TRUE;
  3 = TRUE;
  5 = TRUE

  IF
  */

  if (n < 2) {
    return false;
  }

  /*
  Whats going on here is that...
  Math.sqrt gets the square root of the number for example lets say n is 9 the math.sqrt is 3
  - We make this the limitation of the for loop and start at 2 because anything divisble by 0 or 1 is not PRIME.

  - We then use modulo and use it againts the N (9) and i is going to increment. So in this case..

  Our 3 is the limit and it starts at 2
  - So at the first iteration, we see if 9 is modulo of 2 which it isnt, (would be 0 if no remainder)
  (this returns greater than 0 because it has remainders)

  Overall, we are using the square root of n as the limit while starting at 2 and we are using the increment of the sqrt
  to find if there are any other remainders for N!!
  */

  //If we are able to find a number that is divisible by math.sqrt(n) meaning that it has no remainders. we return false.
  //We use math.sqrt because if we dont, we will be repeating movement.
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrime(713));
