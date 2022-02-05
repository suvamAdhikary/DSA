# Matrix Diagonal Sum

<br>

## Given a square matrix mat, return the sum of the matrix diagonals.

## Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

<br>

## [LeetCode](https://leetcode.com/problems/matrix-diagonal-sum/)

<br>
 
### Example 1:
```
Input: mat = [[1,2,3],
              [4,5,6],
              [7,8,9]]
Output: 25
Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
Notice that element mat[1][1] = 5 is counted only once.
```
<br>

### Example 2:
```
Input: mat = [[1,1,1,1],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1]]
Output: 8
```
<br>

### Example 3:
```
Input: mat = [[5]]
Output: 5
```

<br>

### Constraints:
```
n == mat.length == mat[i].length
1 <= n <= 100
1 <= mat[i][j] <= 100
```

<br>

### Tags: [MATRIX](https://leetcode.com/tag/matrix/), [ARRAY](https://leetcode.com/tag/array/)

<br>
<br>
<br>
<br>
<br>

#### Hints: 

<br>

- There will be overlap of elements in the primary and secondary diagonals if and only if the length of the matrix is odd, which is at the center.