function topStudents(
  positive_feedback: string[],
  negative_feedback: string[],
  report: string[],
  student_id: number[],
  k: number
): number[] {
  const positiveSet = new Set(positive_feedback);
  const negativeSet = new Set(negative_feedback);
  let map: Map<number, number> = new Map();
  for (let i = 0; i < student_id.length; i++) {
    let student = student_id[i];
    let studentReport = report[i];
    let studentScore = 0;
    studentReport.split(" ").forEach((word) => {
      if (positiveSet.has(word)) {
        studentScore += 3;
      }
      if (negativeSet.has(word)) {
        studentScore -= 1;
      }
    });
    map.set(student, studentScore);
  }
  const entriesArray = Array.from(map.entries());
  return entriesArray
    .sort((a, b) => {
      if (a[1] !== b[1]) {
        return b[1] - a[1];
      }
      return a[0] - b[0];
    })
    .map((entry) => entry[0])
    .slice(0, k);
}
