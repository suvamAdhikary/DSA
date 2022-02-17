# Linked List Cycle

<br>

## Given head, the head of a linked list, determine if the linked list has a cycle in it.

## There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

## Return true if there is a cycle in the linked list. Otherwise, return false.

<br>

## [Leetcode](https://leetcode.com/problems/linked-list-cycle/)

<br>

### Example 1:

![ex1](assets/circularlinkedlist.png)
```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```
<br>

### Example 2:

![ex2](assets/circularlinkedlist_test2.png)
```
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
```
<br>

### Example 3:

![ex3](assets/circularlinkedlist_test3.png)
```
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
``` 
<br>

### Constraints:
```
The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.
``` 
<br>

### Follow up: `Can you solve it using O(1) (i.e. constant) memory?`

<br>

### Tags: [LINKED LIST](https://leetcode.com/tag/linked-list/), [HASH TABLE](https://leetcode.com/tag/hash-table/), [TWO POINTERS](https://leetcode.com/tag/two-pointers/)
