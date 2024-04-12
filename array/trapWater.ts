function trap(height: number[]): number {
  let trapped = 0;
  let leftMax = new Array(height.length);
  let rightMax = new Array(height.length);

  for (let i = height.length - 1; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1] ?? 0);
  }
  for (let i = 0; i < height.length; i++) {
    leftMax[i] = Math.max(height[i], leftMax[i - 1] ?? 0);
    if (i < height.length) {
      trapped += Math.min(rightMax[i], leftMax[i]) - height[i];
    }
  }
  return trapped;
}
