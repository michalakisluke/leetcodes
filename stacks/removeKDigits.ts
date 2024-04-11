function removeKdigits(num: string, k: number): string {
  let stack: string[] = [];
  for (let n of num) {
    while (stack.length && n < stack[stack.length - 1] && k > 0) {
      k--;
      stack.pop();
    }
    stack.push(n);
  }
  while (k > 0) {
    k--;
    stack.pop();
  }
  while (stack[0] === "0") {
    stack.shift();
  }
  return stack.length ? stack.join("") : "0";
}
