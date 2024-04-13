function largestRectangleArea(heights: number[]): number {
  let stack: number[] = [];
  let maxArea = -Infinity;
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      let curr = stack.pop();
      let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
      let height = heights[curr!];
      let area = width * height;
      maxArea = Math.max(area, maxArea);
    }
    stack.push(i);
  }
  while (stack.length) {
    let curr = stack.pop();
    let width =
      stack.length === 0
        ? heights.length
        : heights.length - stack[stack.length - 1] - 1;
    let height = heights[curr!];
    let area = width * height;
    maxArea = Math.max(area, maxArea);
  }
  return maxArea;
}
