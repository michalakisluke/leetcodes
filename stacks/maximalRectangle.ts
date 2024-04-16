function maximalRectangle(matrix: string[][]): number {
  let maxArea = -Infinity;
  let arr = new Array(matrix[0].length).fill(0);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const val = +matrix[i][j];
      if (val === 0) {
        arr[j] = 0;
      } else arr[j] += val;
    }
    let currArea = largestRectangleArea(arr);
    maxArea = Math.max(maxArea, currArea);
  }
  return maxArea;
}

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
