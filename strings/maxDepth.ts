function maxDepth(s: string): number {
  let count = 0;
  let max = count;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
      max = Math.max(max, count);
    } else if (s[i] === ")") {
      count--;
      max = Math.max(max, count);
    }
  }
  return max;
}
