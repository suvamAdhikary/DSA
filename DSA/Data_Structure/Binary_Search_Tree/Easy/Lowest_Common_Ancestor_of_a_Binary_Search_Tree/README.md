# Lowest Common Ancestor of a Binary Search Tree

<br>

## Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

## According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

<br>

## [Leetcode](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

<br>

### Example 1:

![ex](assets/binarysearchtree_improved.png)
```
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
```
<br>

### Example 2:

![ex](assets/binarysearchtree_improved.png)
```
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
```
<br>

### Example 3:
```
Input: root = [2,1], p = 2, q = 1
Output: 2
``` 
<br>

### Constraints:
```
The number of nodes in the tree is in the range [2, 105].
-109 <= Node.val <= 109
All Node.val are unique.
p != q
p and q will exist in the BST.
```
<br>

### Tags: ## Tags: [BINARY SEARCH TREE](https://leetcode.com/tag/binary-search-tree/), [BINARY TREE](https://leetcode.com/tag/binary-tree/), [DEPTH FIRST SEARCH](https://leetcode.com/tag/depth-first-search/), [TREE](https://leetcode.com/tag/tree/)
