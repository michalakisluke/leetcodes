function checkSubarraySum(nums: number[], k: number): boolean {
  const remainderMap: Map<number, number> = new Map([[0, -1]]);
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    const remainder = sum % k;
    if (remainderMap.has(remainder)) {
      if (i - remainderMap.get(remainder)! > 1) {
        return true;
      }
    } else {
      remainderMap.set(remainder, i);
    }
  }
  return false;
}
