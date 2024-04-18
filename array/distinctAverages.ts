function distinctAverages(nums: number[]): number {
  let averageArr: number[] = [];
  nums.sort((a, b) => a - b);
  while (nums.length) {
    if (nums.length === 1) {
      let min = nums.pop();
      if (!averageArr.includes(min!)) averageArr.push(min!);
    } else {
      let max = nums.pop();
      let min = nums.shift();
      const avg = (max! + min!) / 2;
      if (!averageArr.includes(avg!)) averageArr.push(avg!);
    }
  }
  return averageArr.length;
}
