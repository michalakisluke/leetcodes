function getLucky(s: string, k: number): number {
  const lowercaseACharCode = "a".charCodeAt(0);
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i) - lowercaseACharCode + 1;
    if (charCode > 9) {
      while (charCode) {
        sum += charCode % 10;
        charCode = Math.floor(charCode / 10);
      }
    } else {
      sum += charCode;
    }
  }

  while (k > 1) {
    let tempSum = 0;
    while (sum) {
      tempSum += sum % 10;
      sum = Math.floor(sum / 10);
    }
    sum = tempSum;
    k--;
  }

  return sum;
}
