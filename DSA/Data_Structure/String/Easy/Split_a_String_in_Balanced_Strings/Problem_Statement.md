# Split a String in Balanced Strings

<br>

## Balanced strings are those that have an equal quantity of 'L' and 'R' characters.

## Given a balanced string s, split it in the maximum amount of balanced strings.

## Return the maximum amount of split balanced strings.

<br>

## [LeetCode](https://leetcode.com/problems/split-a-string-in-balanced-strings/)

<br>

### Example 1:
```
Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
```
<br>

### Example 2:
```
Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
```
<br>

### Example 3:
```
Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".
``` 
<br>

### Constraints:
```
1 <= s.length <= 1000
s[i] is either 'L' or 'R'.
s is a balanced string.
```

<br>

### Tags: [STRING](https://leetcode.com/tag/string/), [GREEDY](https://leetcode.com/tag/greedy/), [COUNTING](https://leetcode.com/tag/counting/)

<br>
<br>
<br>
<br>
<br>

### HInt:

<br>

- Loop from left to right maintaining a balance variable when it gets an L increase it by one otherwise decrease it by one.
- Whenever the balance variable reaches zero then we increase the answer by one.