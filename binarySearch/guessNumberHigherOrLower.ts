let guess = (num: number): number => {
  let targ = 6;
  if (num < targ) {
    return 1;
  } else if (num > targ) {
    return -1;
  } else return 0;
};

function guessNumber(n: number): number {
  if (n === 1) return 1;
  let start = 1;
  let end = n;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let ans = guess(mid);
    // guess is lower than picked (mid becomes start)
    if (ans === 1) {
      start = mid + 1;
    }
    // guess is greater than picked (mid becomes end)
    if (ans === -1) {
      end = mid - 1;
    }
    // guess equals picked
    if (ans === 0) return mid;
  }
  return 0;
}
