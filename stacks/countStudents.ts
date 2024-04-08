function countStudents(students: number[], sandwiches: number[]): number {
  let counter = 0;
  while (students.length) {
    if (counter === students.length) {
      break;
    }
    if (students[0] === sandwiches[0]) {
      sandwiches.shift();
      students.shift();
      counter = 0;
    } else {
      counter++;
      students.push(students.shift()!);
    }
  }
  return students.length;
}
