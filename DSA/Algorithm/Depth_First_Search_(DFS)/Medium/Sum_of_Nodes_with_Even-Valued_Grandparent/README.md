# Sum of Nodes with Even-Valued Grandparent

<br>

## Given the root of a binary tree, return the sum of values of nodes with an even-valued grandparent. If there are no nodes with an even-valued grandparent, return 0.

## A grandparent of a node is the parent of its parent if it exists.

<br>

## [Leetcode](https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/)

<br>

### Example 1:

![ex1](assets/even1-tree.jpeg)
```
Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 18
Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.
```
<br>

### Example 2:

![ex2](assets/even2-tree.jpeg)
```
Input: root = [1]
Output: 0
``` 
<br>

### Constraints:

- The number of nodes in the tree is in the range [1, 104].
- 1 <= Node.val <= 100

<br>

### Tags: [DEPTH-FIRST SEARCH](https://leetcode.com/tag/depth-first-search/), [BINARY TREE](https://leetcode.com/tag/binary-tree/), [BREADTH-FIRST SEARCH](https://leetcode.com/tag/breadth-first-search/), [TREE](https://leetcode.com/tag/tree/)

<br>
<br>
<br>
<br>
<br>

#### Hints:

<br>

- Traverse the tree keeping the parent and the grandparent.
- If the grandparent of the current node is even-valued, add the value of this node to the answer.
