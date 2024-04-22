function openLock(deadends: string[], target: string): number {
  const start: string = "0000";
  const deadSet = new Set(deadends);
  const visited = new Set();
  visited.add(start);

  let queue: [string, number][] = [[start, 0]];

  const turn = (el: string): string[] => {
    const arr: string[] = [];
    for (let i = 0; i < el.length; i++) {
      arr.push(
        el.slice(0, i) + ((+el[i] + 1) % 10).toString() + el.slice(i + 1)
      );
      arr.push(
        el.slice(0, i) + ((+el[i] + 9) % 10).toString() + el.slice(i + 1)
      );
    }
    return arr;
  };

  while (queue.length > 0) {
    // use shift not .pop() for optimal search
    let curr = queue.shift();
    const combo = curr![0];
    const count = curr![1];

    if (combo === target) {
      return count;
    }
    if (deadSet.has(combo)) {
      continue;
    }
    for (let move of turn(combo)) {
      if (!visited.has(move)) {
        visited.add(move);
        queue.push([move, count + 1]);
      }
    }
  }

  return -1;
}
