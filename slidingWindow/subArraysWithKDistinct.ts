function subarraysWithKDistinct(nums: number[], k: number): number {
  return atMost(nums, k) - atMost(nums, k - 1);
}

function atMost(nums: number[], k: number): number {
  let left = 0;
  let right = 0;
  let map = new Map();
  let count = 0;

  while (right < nums.length) {
    map.set(nums[right], (map.get(nums[right]) ?? 0) + 1);
    while (map.size > k) {
      if (map.has(nums[left])) {
        if (map.get(nums[left]) === 1) map.delete(nums[left]);
        else map.set(nums[left], map.get(nums[left]) - 1);
      }
      left++;
    }
    count += right - left + 1;
    right++;
  }

  return count;
}
