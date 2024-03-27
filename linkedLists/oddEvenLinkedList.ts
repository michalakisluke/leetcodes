import { ListNode } from "./linkedList";

function oddEvenList(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null || head.next.next == null) return head;
  let odd: ListNode | null = head;
  let even: ListNode | null = head.next;
  let evenStart: ListNode | null = even;
  let curr: ListNode | null = head.next.next;
  let flagOdd = true;
  while (curr) {
    if (flagOdd) {
      odd.next = curr;
      odd = curr;
    } else {
      even.next = curr;
      even = curr;
    }
    curr = curr.next;
    flagOdd = !flagOdd;
  }
  odd.next = evenStart;
  even.next = null;
  return head;
}
