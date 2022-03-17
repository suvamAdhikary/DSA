# Deepest Leaves Sum

## Given the root of a binary tree, return the sum of values of its deepest leaves.
 
<br>

## [Leetcode](https://leetcode.com/problems/deepest-leaves-sum/)

<br>

### Example 1:

![ex1](assets/1483_ex1.png)
```
Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15
```
<br>

### Example 2:
```
Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 19
``` 
<br>

### Constraints:

- The number of nodes in the tree is in the range [1, 104].
- 1 <= Node.val <= 100

<br>

### Tags: [BREADTH-FIRST SEARCH](https://leetcode.com/tag/breadth-first-search/), [BINARY TREE](https://leetcode.com/tag/binary-tree/), [DEPTH-FIRST SEARCH](https://leetcode.com/tag/depth-first-search/), [TREE](https://leetcode.com/tag/tree/)

<br>
<br>
<br>
<br>
<br>

#### Hints:

<br>

- Traverse the tree to find the max depth.
- Traverse the tree again to compute the sum required.
