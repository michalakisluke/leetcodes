function deckRevealedIncreasing(deck: number[]): number[] {
  // look at the top card (it's revealed now)
  // remove it from the deck (push it to resultArr)
  // take the next card and put it at the end of the deck
  // start again
  let result: number[] = [];
  let queue: number[] = [];
  deck.sort((a, b) => a - b);
  for (let i = 0; i < deck.length; i++) {
    queue.push(i);
  }
  for (let card of deck) {
    result[queue.shift()!] = card;
    if (queue.length) {
      queue.push(queue.shift()!);
    }
  }

  return result;
}
