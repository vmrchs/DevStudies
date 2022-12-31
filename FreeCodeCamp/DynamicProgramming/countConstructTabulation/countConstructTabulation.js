const countConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1; // we start with a 1 in case the target asked is an empty string

  for (let i = 0; i <= target.length; i++) {
    // then we iterate through the target word as if it was our table
    for (let word of wordBank) {
      // for each word in our wordbank
      if (target.slice(i, i + word.length) === word) {
        // if it matches the current index in our table
        table[i + word.length] += table[i]; // will add its current value to the word.length index
      } // since we start iterating from index 0, which has a value of 1
    } // every time we find a valid combination of words in our wordbank that allows us to create the target word
  } // we will add 1 to table[target.length]
  // which we then return
  return table[target.length];
};

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); // 2
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // 0
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // 4
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); // 0
