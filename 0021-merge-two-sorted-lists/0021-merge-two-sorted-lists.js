/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    /*
    Input: 2 linkedList 
    Output: the same linkedlist but a merged one. 
    Constraint: if both empty, return array. if one empty, return the other.
    EdgeCase: im wondering if their in order to begin with lmfao.
    */
    
    
    /*
        what you can do is create variables that store the linkedlist 
        
        check the val to see which one is least 
        
        for the least one, 

    */
    
    
    
 const prehead = {
    val: -1,
    next: null
  };

    let prev = prehead;
    while (l1 !== null && l2 !== null) {
      if (l1.val <= l2.val) {
        prev.next = l1;
        l1 = l1.next;
      } else {
        prev.next = l2;
        l2 = l2.next;
      }
      prev = prev.next;
    }

    // At least one of l1 and l2 can still have nodes at this point, so connect
    // the non-null list to the end of the merged list.
    prev.next = l1 === null ? l2 : l1;

    return prehead.next;
};