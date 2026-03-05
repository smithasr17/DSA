function Node(val, next = null) {
  this.val = val;
  this.next = next;
}

function duplicateRemove(head) {
  let current = head;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}

function printList(head) {
  let current = head;

  while (current !== null) {
    console.log(current.val);
    current = current.next;
  }
}

// Creating Linked List: 1 → 1 → 2 → 3 → 3
let head = new Node(1);
head.next = new Node(1);
head.next.next = new Node(2);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(3);

// Remove duplicates
let result = duplicateRemove(head);

// Print result
printList(result);