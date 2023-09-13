/*
Write a function, reverseList, that takes in the head of a linked list as an argument.
The function should reverse the order of the nodes in the linked list
in-place and return the new head of the reversed linked list.
*/

//Iterative Approach
const reverseList = (head) => {
  let lastNode = null;

  while (head !== null) {
    const nextNode = head.next;
    head.next = lastNode;
    lastNode = head;
    head = nextNode;
  }
  return lastNode;
};

//Recursive Approach
const _reverseList = (head, prev = null) => {
  //Return when we reach the end of the root head
  if (head === null) return prev;
  //Saving the .next from current head
  const next = head.next;
  //Assigning prev to the current heads .next
  head.next = prev;

  //This part is important because we are passing
  // 1. next: which is the modified head root so we can traverse the LL
  // 2, head: which  has now been modified above and will continuously reassign the .next of current head to whatever we pass here as 'head'
  return _reverseList(next, head);
};

//Test Case
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

reverseList(a); // f -> e -> d -> c -> b -> a
