function canBeTypedWords(text: string, brokenLetters: string): number {
  const brokenSet = new Set(brokenLetters.split(""));
  const wordsArr = text.split(" ");
  let wordsCount = wordsArr.length;
  for (let i = 0; i < wordsArr.length; i++) {
    const letters = wordsArr[i].split("");
    for (let j = 0; j < letters.length; j++) {
      if (brokenSet.has(letters[j])) {
        wordsCount--;
        break;
      }
    }
  }
  return wordsCount;
}
