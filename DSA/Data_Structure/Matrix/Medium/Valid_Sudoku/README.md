# Valid Sudoku

<br>

## Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

## Each row must contain the digits 1-9 without repetition.
## Each column must contain the digits 1-9 without repetition.
## Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
## Note:

## A Sudoku board (partially filled) could be valid but is not necessarily solvable.
## Only the filled cells need to be validated according to the mentioned rules.

<br>

## [Leetcode](https://leetcode.com/problems/valid-sudoku/)

<br>

### Example 1:

![img](assets/250px-Sudoku-by-L2G-20050714.svg.webp)
```
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
```
<br>

### Example 2:
```
Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
```
<br>

### Constraints:
```
board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.
```

<br>

### Tags: [ARRAY](https://leetcode.com/tag/array/), [HASH TABLE](https://leetcode.com/tag/hash-table/), [MATRIX](https://leetcode.com/tag/matrix/)

