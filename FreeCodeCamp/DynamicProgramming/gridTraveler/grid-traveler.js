const gridTraveler = (m, n, memo = {}) => {
  const key = m + "," + n;
  // console.log(memo) will bring the memo object, with all its items
  // console.log(memo);

  // memo[key] will then bring the sum of 1 values found through the recursion
  // console.log(memo[key]);

  // check if the arguments are already in the memo
  if (key in memo) return memo[key];
  // check if it is a basic case
  if (m === 1 && n === 1) return 1; // valid path
  if (m === 0 || n === 0) return 0; // invalid path
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo); // return the sum of me going down, and going right
  return memo[key];
};

// console.log(gridTraveler(1, 1)); // 1
// console.log(gridTraveler(2, 3)); // 3
// console.log(gridTraveler(3, 2)); // 3
// console.log(gridTraveler(3, 3)); // 6
// console.log(gridTraveler(18, 18)); // 2333606220

console.log(gridTraveler(2, 3)); // 3
