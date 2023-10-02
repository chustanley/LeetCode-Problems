/*
Write a function, zipperLists, that takes in the head of two linked lists as arguments.
 The function should zipper the two lists together into single linked list by alternating nodes.
 If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes.
 The function should return the head of the zippered linked list.
Do this in-place, by mutating the original Nodes.
You may assume that both input lists are non-empty.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Iterative Approach
/*
n = length of list 1
m = length of list 2
Time: O(min(n, m))
Space: O(1)
*/
const zipperLists = (head1, head2) => {
  const start = head1;
  let end = start;

  while (head1 !== null && head2 !== null) {
    //Storing the .next so that we still have access
    const head1Next = head1.next;
    const head2Next = head2.next;

    //Yes this does modify the head1's.next but we still have access due to the variables in 14 and 15
    end.next = head2;
    //reassign the LL to allow access to the next nodes
    head1 = head1Next;
    head2 = head2Next;

    //Edgecase incase the head2 tail is still not at null
    //Meaning that we have unequal LL
    //Very valuable becuase if head1 is at the end and head2 isnt, we should just return because on like 18, we already added head2!

    //However, if its the opposite, we assign the .next.next to equal back to the head1 / after mod and redirect our end pointer to that location
    if (head1 === null && head2 !== null) {
      //This is already going to have head2 in the end from line 16
      return start;
    } else {
      //When head2 is ended but head1 isnt, we have to add it back.
      end.next.next = head1;
      end = end.next.next;
    }
  }
  return start;
};

//Recursive Approach
/*
n = length of list 1
m = length of list 2
Time: O(min(n, m))
Space: O(min(n, m))
*/
const _zipperLists = (head1, head2) => {
  //If both are null which means we reached the end of a equal lenth LL, return null to end the zipper for head2.next
  if (head1 === null && head2 === null) return null;
  //If one of them are null then send the opposite to be the .next of head2
  if (head1 === null) return head2;
  if (head2 === null) return head1;
  //We are storing the .next for both since we will be modifying head1
  const next1 = head1.next;
  const next2 = head2.next;
  //Modify the .next
  head1.next = head2;
  //head2.next will be determined by whatever returns in recursion
  head2.next = _zipperLists(next1, next2);
  return head1;
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

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z -> d -> e -> f

//STRUCTY
const iterativeZipperLists = (head1, head2) => {
  const head = head1;
  let tail = head;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;

  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count += 1;
  }

  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;

  return head;
};

const recursiveZipperLists = (head1, head2) => {
  if (head1 === null && head2 === null) return null;
  if (head1 === null) return head2;
  if (head2 === null) return head1;
  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperLists(next1, next2);
  return head1;
};
