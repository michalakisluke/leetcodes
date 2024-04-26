function longestIdealString(s: string, k: number): number {
  // if k === 25 the entire string is valid
  if (k === 25) return s.length;

  // fill longest
  const longest: Record<string, number> = {};
  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode("a".charCodeAt(0) + i);
    longest[letter] = 0;
  }

  // iterate through s
  for (const char of s) {
    // current char value
    const currentCharValue = char.charCodeAt(0);
    // allowable start and end character char values
    const start = Math.max(currentCharValue - k, "a".charCodeAt(0));
    const end = Math.min(currentCharValue + k, "z".charCodeAt(0));

    // set a max length and iterate through start to end
    let maxLength = 0;
    for (let i = start; i <= end; i++) {
      const letter = String.fromCharCode(i);
      // max length is now the max of maxLength or any previously established max
      maxLength = Math.max(maxLength, longest[letter]);
    }
    // add one to maxLength, set longest[char] to that value
    longest[char] = maxLength + 1;
  }
  return Math.max(...Object.values(longest));
}
