# Remove Nth Node From End of List

<br>

## Given the head of a linked list, remove the nth node from the end of the list and return its head.

<br>

## [Leetcode](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

<br>

### Example 1:

![ex1](assets/remove_ex1.jpeg)
```
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```
<br>

### Example 2:
```
Input: head = [1], n = 1
Output: []
```
<br>

### Example 3:
```
Input: head = [1,2], n = 1
Output: [1]
``` 
<br>

### Constraints:

- The number of nodes in the list is sz.
- 1 <= sz <= 30
- 0 <= Node.val <= 100
- 1 <= n <= sz

<br> 

### Follow up: `Could you do this in one pass?`

<br>

### Tags: [TWO POINTERS](https://leetcode.com/tag/two-pointers/), [LINKED LIST](https://leetcode.com/tag/linked-list/)

<br>
<br>
<br>
<br>
<br>

#### Hints:

<br>

- Maintain two pointers and update one with a delay of n steps.
