function findAnagrams(s: string, p: string): number[] {
  let pLength: number = p.length;
  let outputArr: number[] = [];
  let start = 0;
  let end = pLength;
  let map = new Map();
  let pMap = new Map();
  for (let i = 0; i < pLength; i++) {
    map.set(s[i], map.get(s[i]) ? map.get(s[i]) + 1 : 1);
    pMap.set(p[i], pMap.get(p[i]) ? pMap.get(p[i]) + 1 : 1);
  }
  while (end < s.length) {
    if (compareMaps(map, pMap)) {
      outputArr.push(end - pLength);
    }
    const endChar = s[end];
    map.set(endChar, map.get(endChar) ? map.get(endChar) + 1 : 1);
    const remove = s[end - pLength];
    if (map.get(remove) === 1) {
      map.delete(remove);
    } else {
      map.set(remove, map.get(remove) - 1);
    }
    end++;
  }
  if (compareMaps(map, pMap)) outputArr.push(end - pLength);
  return outputArr;
}

const compareMaps = (
  slidingMap: Map<string, number>,
  pMap: Map<string, number>
): boolean => {
  for (let [char, count] of slidingMap)
    if (pMap.get(char) !== count) return false;
  return true;
};
