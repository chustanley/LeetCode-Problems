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

    
    
// This is the starter node that we will be adding into.
 const starter = {
    val: -1,
    next: null
  };

//PRIMATIVES: So for objects, when you have another variable that points to it, you are referencing to the same object. 
//Changing this let/var will change the original object 
 let lastNode = starter;
    
    
    
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            //We are adding the entire linkedlist into lastNode.next and then cutting down l1 by 1 node in the next line. 
            lastNode.next = l1;
            l1 = l1.next;
        } else {
            lastNode.next = l2;
            l2 = l2.next;
        }
        
        //THE important part, whats going on here is that after you reassigned lastNode.next to point at l1
        //You are making the lastNode variable point at the most recently reassigned 
        
        //This in a way is holding the .next every single time. In a way it is 'keeping track of the last recently added node!! 
        lastNode = lastNode.next;
    }
    
    //Adding the residual becuase if the linkedlist have different 'length' then one linkedlist will have more nodes than another. 
    if (l1 === null) {
        lastNode.next = l2
    } else {
        lastNode.next = l1
    }
    
    return starter.next;
    
};