function tribonacci(n: number): number {
  const trib: number[] = [0, 1, 1];
  if (n === 0 || n === 1 || n === 2) return trib[n];
  for (let i: number = 2; i < n; i++) {
    trib.push(trib[i] + trib[i - 1] + trib[i - 2]);
  }
  return trib[trib.length - 1];
}
