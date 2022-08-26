# Max Area of Island

<br>

## You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

## The area of an island is the number of cells with a value 1 in the island.

## Return the maximum area of an island in grid. If there is no island, return 0.

<br>

## [Leetcode](https://leetcode.com/problems/max-area-of-island/)

<br>

### Example 1:

![ex1](assets/maxarea1-grid.jpeg)
```
Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
```
<br>

### Example 2:
```
Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0
``` 
<br>

### Constraints:

- m == grid.length
- n == grid[i].length
- 1 <= m, n <= 50
- grid[i][j] is either 0 or 1.

<br>

### Tags: [DEPTH-FIRST SEARCH](https://leetcode.com/tag/depth-first-search/), [ARRAY](https://leetcode.com/tag/array/), [BREADTH-FIRST SEARCH](https://leetcode.com/tag/breadth-first-search/), [MATRIX](https://leetcode.com/tag/matrix/), [UNION FIND](https://leetcode.com/tag/union-find/)
