function countNicePairs(nums: number[]): number {
  let map = new Map();
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] - reversal(nums[i]);
    if (map.get(nums[i])) {
      count += map.get(nums[i]);
    }
    map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
  }
  return count % (Math.pow(10, 9) + 7);
}

let reversal = (num: number): number => {
  let rev = 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev;
};
