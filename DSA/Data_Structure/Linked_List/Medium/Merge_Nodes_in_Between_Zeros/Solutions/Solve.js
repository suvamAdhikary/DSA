/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var mergeNodes = function(head) {
    if(!head) return [];
    let temp = 0;
    let current = head.next;
    while(current.val){
        temp += current.val;
        current = current.next;
    }
    let node = new ListNode(temp);
    head = node;
    let pre = head;
    temp = 0;
    current = current.next;
    while(current !== null){
        if(current.val === 0){
            node = new ListNode(temp);
            pre.next = node;
            pre = pre.next;
            temp = 0;
        } else {
            temp += current.val;
        }
        current = current.next;
    }
    return head;
};