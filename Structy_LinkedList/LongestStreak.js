/*
Write a function, longestStreak, that takes in the head of a linked list as an argument.
The function should return the length of the longest consecutive streak of the same value within the list.
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//Iterative Approach
/*
n = number of nodes
Time: O(n)
Space: O(1)
*/
const longestStreak = (head) => {
  if (head === null) return 0;

  let greatest;
  let count = 1;
  let streak = head.val;
  head = head.next;

  while (head !== null) {
    if (head.val === streak) {
      count++;
    } else {
      greatest = count;
      count = 1;
      streak = head.val;
    }

    head = head.next;
  }

  if (count > greatest || greatest === undefined) greatest = count;
  return greatest;
};

//TestCase
const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

longestStreak(a); // 3
