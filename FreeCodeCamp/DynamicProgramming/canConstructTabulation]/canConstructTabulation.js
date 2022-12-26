const canConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false); // we make our table bigger than our target length in order to consider the case of an empty string being asked
  table[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      // if my current position in the table is reachable, then we'll do some aditional logic
      for (let word of wordBank) {
        // if the word matches the characters starting at position i
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }
  return table[target.length];
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); // false
console.log(
  canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); // true
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
  ])
); // false
