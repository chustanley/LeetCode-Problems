/*
Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments.
The function should merge the two lists together into single sorted linked list.
The function should return the head of the merged linked list.
Do this in-place, by mutating the original Nodes.
You may assume that both input lists are non-empty and contain increasing sorted numbers.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Iterative Approach

const mergeLists = (head1, head2) => {
  //This is to create an initial value for start and end.
  var start;
  var end;
  if (head1.val >= head2.val) {
    start = head2;
    end = start;
    head2 = head2.next;
  } else {
    start = head1;
    end = start;
    head1 = head1.next;
  }

  //This is the recursion.
  while (head1 !== null && head2 !== null) {
    //We add the most least into the end and reassign end to point back to its most recently updated with line 44
    if (head1.val >= head2.val) {
      end.next = head2;
      head2 = head2.next;
    } else {
      end.next = head1;
      head1 = head1.next;
    }

    end = end.next;
  }

  //This adds the remainder of what we have left to the end of the LL
  if (head1 === null) end.next = head2;
  if (head2 === null) end.next = head1;

  return start;
};
