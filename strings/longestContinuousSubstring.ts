function longestContinuousSubstring(s: string): number {
  let longest: number = 1;
  let curr: number = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i].charCodeAt(0) - s[i - 1].charCodeAt(0) == 1) {
      curr++;
    } else {
      curr = 1;
    }
    longest = Math.max(longest, curr);
  }
  return longest;
}
