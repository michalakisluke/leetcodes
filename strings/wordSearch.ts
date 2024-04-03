function exist(board: string[][], word: string): boolean {
  let wordExists = false;
  const backtrack = (pos1: number, pos2: number, length: number) => {
    if (length === word.length) {
      wordExists = true;
      return;
    }
    if (
      pos1 >= board.length ||
      pos2 >= board[0].length ||
      pos1 < 0 ||
      pos2 < 0
    ) {
      return;
    }
    if (board[pos1][pos2] !== word[length]) {
      return;
    }

    const prev = board[pos1][pos2];
    board[pos1][pos2] = "visited";
    backtrack(pos1 + 1, pos2, length + 1);
    backtrack(pos1, pos2 + 1, length + 1);
    backtrack(pos1 - 1, pos2, length + 1);
    backtrack(pos1, pos2 - 1, length + 1);
    board[pos1][pos2] = prev;
  };

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      backtrack(i, j, 0);
    }
  }

  return wordExists;
}
