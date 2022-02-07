# DI String Match

<br>

## A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

## s[i] == 'I' if perm[i] < perm[i + 1], and
## s[i] == 'D' if perm[i] > perm[i + 1].
## Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

<br>

## [LeetCode](https://leetcode.com/problems/di-string-match/)

<br>

### Example 1:
```
Input: s = "IDID"
Output: [0,4,1,3,2]
```
<br>

### Example 2:
```
Input: s = "III"
Output: [0,1,2,3]
```

### Example 3:
```
Input: s = "DDI"
Output: [3,2,0,1]
``` 
<br>

### Constraints:
```
1 <= s.length <= 105
s[i] is either 'I' or 'D'.
```

<br>

### Tags: [TWO POINTERS](https://leetcode.com/tag/two-pointers/), [ARRAY](https://leetcode.com/tag/array/), [MATH](https://leetcode.com/tag/math/), [STRING](https://leetcode.com/tag/string/), [GREEDY](https://leetcode.com/tag/greedy/)
