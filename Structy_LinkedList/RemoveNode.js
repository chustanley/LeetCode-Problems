/*
Write a function, removeNode, that takes in the head of a linked list and a target value as arguments.
The function should delete the node containing the target value from the linked list and return the head of the resulting linked list.
If the target appears multiple times in the linked list, only remove the first instance of the target in the list.

Do this in-place.

You may assume that the input list is non-empty.

You may assume that the input list contains the target.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Iterative Approach

/*
Keep a pointer on the end / most recently visited and modify the head in the argument.
When you come across the val you are looking for in the argument, make the end.next = head.next
so we skip it and return the start which is the beginning of the linkedlist
*/
const removeNode = (head, targetVal) => {
  //Checks to see if targetVal is equal to the first head.val
  if (head.val === targetVal) return head.next;

  //Keeps track of the start
  const start = head;
  //Keeps track of the previos
  let end = start;

  //We already checked the first NODE, so now we can move it to the second NODE.
  head = head.next;

  //Iteration
  while (head !== null) {
    //If target found, we assign the end.next to the head.next, skipping the targeted value. Then we return.
    if (head.val === targetVal) {
      end.next = head.next;
      return start;
    }

    //During every iteration, adjust .next of end to next and the head also to next.
    //End is always one node behind head.next
    end = end.next;
    head = head.next;
  }
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

removeNode(a, "c");
// a -> b -> d -> e -> f
