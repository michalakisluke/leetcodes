function romanToInt(s: string): number {
  let numberMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let split = s.split("").map((el) => numberMap[el]);
  let num = 0;
  for (let i = 0; i < split.length; i++) {
    if (split[i] < split[i + 1]) {
      num -= split[i];
    } else num += split[i];
  }
  return num;
}
