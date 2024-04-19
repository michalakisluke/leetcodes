function numberOfMatches(n: number): number {
  let count = 0;
  while (n > 1) {
    if (n % 2 === 1) {
      const matches = (n - 1) / 2;
      count += matches;
      n = (n - 1) / 2 + 1;
    } else {
      const matches = n / 2;
      count += matches;
      n = matches;
    }
  }
  return count;
}
