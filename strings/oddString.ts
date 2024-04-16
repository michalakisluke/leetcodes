function oddString(words: string[]): string {
  let charCodeLowerCaseA = "a".charCodeAt(0);
  let charCodeMap = new Map();
  for (let word of words) {
    let wordArr: number[] = [];
    for (let i = 0; i < word.length - 1; i++) {
      let currLetter: number = word[i].charCodeAt(0) - charCodeLowerCaseA + 1;
      let nextLetter: number =
        word[i + 1].charCodeAt(0) - charCodeLowerCaseA + 1;
      wordArr.push(nextLetter - currLetter);
    }
    let arrString = JSON.stringify(wordArr);
    let arr = charCodeMap.get(arrString) ?? [];
    arr.push(word);
    charCodeMap.set(arrString, arr);
  }
  for (let entry of charCodeMap.entries()) {
    let arrLength = entry[1].length;
    if (arrLength === 1) {
      return entry[1][0];
    }
  }
  return "";
}
