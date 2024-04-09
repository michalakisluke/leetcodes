function minOperations(s: string): number {
  let zerosFlipCount = 0;
  let onesFlipCount = 0;
  let flipZeroes = s.split("");
  let flipOnes = s.split("");
  for (let i = 0; i < flipZeroes.length; i++) {
    // handle zeros
    if (i % 2 === 0) {
      if (parseInt(flipZeroes[i]) === 0) {
        zerosFlipCount++;
      }
    } else {
      if (parseInt(flipZeroes[i]) !== 0) {
        zerosFlipCount++;
      }
    }
    // handle ones
    if (i % 2 === 0) {
      if (parseInt(flipOnes[i]) === 1) {
        onesFlipCount++;
      }
    } else {
      if (parseInt(flipZeroes[i]) !== 1) {
        onesFlipCount++;
      }
    }
  }
  return Math.min(zerosFlipCount, onesFlipCount);
}
