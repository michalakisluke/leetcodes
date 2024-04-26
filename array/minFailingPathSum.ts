function minFallingPathSum(grid: number[][]): number {
  let min1 = 0;
  let min2 = 0;
  let ind = 0;
  for (let i = 0; i < grid.length; i++) {
    let tempMin1 = Infinity;
    let tempMin2 = Infinity;
    let tempInd = 0;
    for (let j = 0; j < grid[0].length; j++) {
      const curr = (grid[i][j] += j === ind ? min2 : min1);
      if (curr < tempMin1) {
        tempMin2 = tempMin1;
        tempMin1 = curr;
        tempInd = j;
      } else if (curr < tempMin2) {
        tempMin2 = curr;
      }
    }
    min1 = tempMin1;
    min2 = tempMin2;
    ind = tempInd;
  }

  return min1;
}
