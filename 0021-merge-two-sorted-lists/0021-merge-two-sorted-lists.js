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

    
    
    
 const starter = {
    val: -1,
    next: null
  };


 let lastNode = starter;
    
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            lastNode.next = l1;
            l1 = l1.next;
        } else {
            lastNode.next = l2;
            l2 = l2.next;
        }
        
        lastNode = lastNode.next;
    }
    
    
    if (l1 === null) {
        lastNode.next = l2
    } else {
        lastNode.next = l1
    }
    
    return starter.next;
    
};