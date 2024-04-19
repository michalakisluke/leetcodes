function numIslands(grid: string[][]): number {
  let count = 0;
  const rows = grid.length;
  const cols = grid[0].length;
  const up = [-1, 0];
  const down = [1, 0];
  const left = [0, -1];
  const right = [0, 1];

  let dfs = (cell: number[]) => {
    const row = cell[0];
    const col = cell[1];
    grid[row][col] = "X";
    // check up
    if (row > 0 && grid[row + up[0]][col + up[1]] === "1") {
      dfs([row + up[0], col + up[1]]);
    }
    // check down
    if (row < rows - 1 && grid[row + down[0]][col + down[1]] === "1") {
      dfs([row + down[0], col + down[1]]);
    }
    // check left
    if (col > 0 && grid[row + left[0]][col + left[1]] === "1") {
      dfs([row + left[0], col + left[1]]);
    }
    // check right
    if (col < cols - 1 && grid[row + right[0]][col + right[1]] === "1") {
      dfs([row + right[0], col + right[1]]);
    }
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs([i, j]);
      }
    }
  }

  return count;
}
