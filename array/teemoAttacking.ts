function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let total = 0;
  let prevEnd = 0;
  for (let i = 0; i < timeSeries.length; i++) {
    let poisonStart = timeSeries[i];
    let poisonEndTime = poisonStart + duration;
    if (prevEnd > poisonStart) {
      total += poisonEndTime - prevEnd;
    } else total += duration;
    prevEnd = poisonEndTime;
  }
  return total;
}
