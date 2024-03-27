import { ListNode } from "./linkedList";

function splitListToParts(
  head: ListNode | null,
  k: number
): Array<ListNode | null> {
  let returnArr = new Array(k).fill(null);
  let curr = head;
  let length = 0;

  while (curr) {
    length++;
    curr = curr.next;
  }

  let partsPer = Math.floor(length / k);
  let partsWithExtra = length % k;

  curr = head;
  for (let i = 0; i < k; i++) {
    let head = curr;
    let size = partsPer + (partsWithExtra > 0 ? 1 : 0);
    for (let j = 1; j < size && curr; j++) {
      curr = curr.next;
    }
    if (curr) {
      let temp = curr.next;
      curr.next = null;
      curr = temp;
    }
    returnArr[i] = head;
    if (partsWithExtra) partsWithExtra--;
  }
  return returnArr;
}
