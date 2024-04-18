function islandPerimeter(grid: number[][]): number {
  let perimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let currCell = grid[i][j];
      if (currCell === 1) {
        let areaPerim = 4;
        if (i + 1 < grid.length && grid[i + 1][j] === 1) areaPerim--;
        if (i - 1 >= 0 && grid[i - 1][j] === 1) areaPerim--;
        if (j + 1 < grid[0].length && grid[i][j + 1] === 1) areaPerim--;
        if (j - 1 >= 0 && grid[i][j - 1] === 1) areaPerim--;
        perimeter += areaPerim;
      }
    }
  }
  return perimeter;
}
