function countSubarrays(nums: number[], k: number): number {
  let max = Math.max(...nums);
  let subArrCount: number = 0;
  let maxCount: number = 0;
  if (nums.filter((el) => el === max).length < k) return 0;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === max) maxCount++;
    while (maxCount >= k) {
      subArrCount += nums.length - i;
      if (nums[j] === max) maxCount--;
      j++;
    }
  }
  return subArrCount;
}
