const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum]; // here we will store cached values to improve our function
  if (targetSum === 0) return []; // when the function reaches a 0, it returns and empty array
  if (targetSum < 0) return null;

  for (let num of numbers) {
    // we iterate throu the array
    const remainder = targetSum - num; // subtracting each item from the targetSum
    const remainderResult = howSum(remainder, numbers, memo); // then we finally call our recursion
    if (remainderResult !== null) {
      // whenever the result brought back is different than null, empty array or an array with items in it
      memo[targetSum] = [...remainderResult, num]; // using the spread operator (...)  we add the current num to whatever came through and assign it to our memo object
      return memo[targetSum]; // and return the array to its parent
    }
  }

  memo[targetSum] = null;
  return null;
};

console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])); // null
