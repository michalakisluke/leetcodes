function reorderSpaces(text: string): string {
  let spaceCount = text.split("").filter((el) => el === " ").length;
  let words = text.split(" ").filter((el) => el !== "");
  if (words.length === 1) return words[0] + " ".repeat(spaceCount);
  let spacesBetween = Math.floor(spaceCount / (words.length - 1));
  let remainingSpaces = spaceCount % (words.length - 1);
  return words.join(" ".repeat(spacesBetween)) + " ".repeat(remainingSpaces);
}
