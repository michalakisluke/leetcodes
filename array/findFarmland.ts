function findFarmland(land: number[][]): number[][] {
  const arr: number[][] = [];
  const rows: number = land.length;
  const cols: number = land[0].length;
  const down: number[] = [1, 0];
  const right: number[] = [0, 1];

  const dfs = (x: number, y: number): number[] => {
    let maxX = x;
    let minX = x;
    let maxY = y;
    let minY = y;
    land[x][y] = 10;

    // down
    if (x < rows - 1 && land[x + down[0]][y + down[1]] === 1) {
      const [tempMinX, tempMinY, tempMaxX, tempMaxY] = dfs(
        x + down[0],
        y + down[1]
      );
      minX = Math.min(minX, tempMinX);
      minY = Math.min(minY, tempMinY);
      maxX = Math.max(maxX, tempMaxX);
      maxY = Math.max(maxY, tempMaxY);
    }
    // right
    if (y < cols - 1 && land[x + right[0]][y + right[1]] === 1) {
      const [tempMinX, tempMinY, tempMaxX, tempMaxY] = dfs(
        x + right[0],
        y + right[1]
      );
      minX = Math.min(minX, tempMinX);
      minY = Math.min(minY, tempMinY);
      maxX = Math.max(maxX, tempMaxX);
      maxY = Math.max(maxY, tempMaxY);
    }

    return [minX, minY, maxX, maxY];
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let curr = land[i][j];
      if (curr === 1) {
        const coords = dfs(i, j);
        arr.push(coords);
      }
    }
  }
  return arr;
}
