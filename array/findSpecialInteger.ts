function findSpecialInteger(arr: number[]): number {
  let max = -Infinity;
  let maxCount = -Infinity;
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], map.get(arr[i]) ? map.get(arr[i]) + 1 : 1);
    if (map.get(arr[i]) > maxCount) {
      maxCount = map.get(arr[i]);
      max = arr[i];
    }
  }
  return max;
}
