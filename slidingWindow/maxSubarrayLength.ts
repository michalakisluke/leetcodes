function maxSubarrayLength(nums: number[], k: number): number {
  let longest: number = 0;
  let leftInd: number = 0;
  let rightInd: number = 0;
  let map: { [key: number]: number } = {};

  while (rightInd < nums.length) {
    map[nums[rightInd]] = (map[nums[rightInd]] || 0) + 1;
    while (map[nums[rightInd]] > k) {
      map[nums[leftInd]]--;
      leftInd++;
    }
    longest = Math.max(longest, rightInd - leftInd + 1);
    rightInd++;
  }
  return longest;
}
