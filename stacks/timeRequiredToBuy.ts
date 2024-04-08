function timeRequiredToBuy(tickets: number[], k: number): number {
  let time = 0;
  while (tickets[k] !== 0) {
    let curr = tickets.shift();
    if (k === 0) {
      k = tickets.length;
    } else k--;
    if (curr !== 0) {
      time++;
      curr!--;
    }
    tickets.push(curr!);
    if (tickets[k] === 0) break;
  }
  return time;
}
