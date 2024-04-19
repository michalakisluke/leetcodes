function areAlmostEqual(s1: string, s2: string): boolean {
  let s1Map = new Map();
  let s2Map = new Map();
  let swapCount = 0;
  for (let i = 0; i < s1.length; i++) {
    s1Map.set(s1[i], s1Map.get(s1[i]) ? s1Map.get(s1[i]) + 1 : 1);
    s2Map.set(s2[i], s2Map.get(s2[i]) ? s2Map.get(s2[i]) + 1 : 1);
  }
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (s2Map.has(s1[i]) && s2Map.get(s1[i]) === s1Map.get(s1[i])) {
        swapCount++;
      } else return false;
    }
  }
  return swapCount === 0 || swapCount === 2;
}
