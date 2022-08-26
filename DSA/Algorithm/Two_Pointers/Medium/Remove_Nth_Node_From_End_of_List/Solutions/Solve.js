/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    if(!head) return head;
    let slow = head, fast = head, prev = null;
    while(n){
        fast = fast.next;
        n--;
    }
    while(fast){
        prev = slow;
        slow = slow.next;
        fast = fast.next;
    }
    console.log(slow)
    if(slow.next) {
        slow.val = slow?.next?.val;
        slow.next = slow?.next?.next;
    } else {
        prev ? prev.next = null : head = prev;   
    }
    
    return head;
};
