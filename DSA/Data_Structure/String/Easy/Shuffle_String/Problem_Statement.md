# Shuffle String

<br>

## You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

## Return the shuffled string.

<br>

## [LeetCode](https://leetcode.com/problems/shuffle-string/)

<br>

### Example 1:

![example!](Assets/example1.jpg)
```
Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
Output: "leetcode"
Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
```
<br>

### Example 2:
```
Input: s = "abc", indices = [0,1,2]
Output: "abc"
Explanation: After shuffling, each character remains in its position.
``` 
<br>

### Constraints:
```
s.length == indices.length == n
1 <= n <= 100
s consists of only lowercase English letters.
0 <= indices[i] < n
All values of indices are unique.
```

### Tags: [STRING](https://leetcode.com/tag/string/), [ARRAY](https://leetcode.com/tag/array/)

<br>
<br>
<br>
<br>
<br>

#### HINT:
<br>

- You can create an auxiliary string t of length n.
- Assign t[indexes[i]] to s[i] for each i from 0 to n-1.
