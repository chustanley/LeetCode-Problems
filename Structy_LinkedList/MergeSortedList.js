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
    //Always reassign the end to its end.next so that were at the latest node!
    end = end.next;
  }

  //This adds the remainder of what we have left to the end of the LL
  if (head1 === null) end.next = head2;
  if (head2 === null) end.next = head1;

  return start;
};

//STRUCTY

const iterativeMergeLists = (head1, head2) => {
  let dummyHead = new Node(null);
  let tail = dummyHead;
  let current1 = head1;
  let current2 = head2;

  while (current1 !== null && current2 !== null) {
    if (current1.val < current2.val) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }

  //This edgecase is for if one of the inputs still have remaining nodes, we add the rest into the tail!
  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;

  return dummyHead.next;
};

const recursiveMergeLists = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;

  //This is how we modify the existing head.
  //We find the lowest one and start saving its .next then modifying the existing head to === that.
  if (head1.val < head2.val) {
    //Saving the head1
    const next1 = head1.next;
    //Reassigning the .next to = the recursive call.
    head1.next = mergeLists(next1, head2);
    //Returning head1 because thats the 'lowest' node we chose!
    return head1;
  } else {
    const next2 = head2.next;
    head2.next = mergeLists(head1, next2);
    return head2;
  }
};
