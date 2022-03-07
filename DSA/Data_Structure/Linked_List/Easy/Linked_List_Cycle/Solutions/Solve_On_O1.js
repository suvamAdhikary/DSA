/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    while(head){
        if(head.val === 'n') return true;
        head.val = 'n';
        head = head.next;
    }
    return false;
};
