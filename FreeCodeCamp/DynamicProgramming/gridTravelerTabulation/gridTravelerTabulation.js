const gridTaveller = (m, n) => {
  const table = Array(m + 1)
    .fill() // if we were to put the array method inside the fill's parenthesis, we would end up with ONE array spread several positions in the parent array
    .map(() => Array(n + 1).fill(0)); // here it's important that we use map so we create several arrays with unique ids we can refer later
  table[1][1] = 1;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];
      if (j + 1 <= n) table[i][j + 1] += current;
      if (i + 1 <= m) table[i + 1][j] += current;
    }
  }

  return table[m][n];
};

console.log(gridTaveller(1, 1)); // 1
console.log(gridTaveller(2, 3)); // 3
console.log(gridTaveller(3, 2)); // 3
console.log(gridTaveller(3, 3)); // 6
console.log(gridTaveller(18, 18)); // 2333606220
