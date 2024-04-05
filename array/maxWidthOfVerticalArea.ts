function maxWidthOfVerticalArea(points: number[][]): number {
  points = points.sort((a, b) => a[0] - b[0]);
  let maxDistBetween = 0;
  for (let i = 0; i < points.length - 2; i++) {
    let curr = points[i];
    let next = points[i + 1];
    let dist = Math.abs(curr[0] - next[0]);
    maxDistBetween = Math.max(dist, maxDistBetween);
  }
  return maxDistBetween;
}
