# Permutation in String

<br>

## Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

## In other words, return true if one of s1's permutations is the substring of s2.

<br>

## [Leetcode](https://leetcode.com/problems/permutation-in-string/)

<br>

### Example 1:
```
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
```
<br>

### Example 2:
```
Input: s1 = "ab", s2 = "eidboaoo"
Output: false
``` 
<br>

### Constraints:

- 1 <= s1.length, s2.length <= 104
- s1 and s2 consist of lowercase English letters.

<br>

### Tags: [SLIDING WINDOW](https://leetcode.com/tag/sliding-window/), [HASH TABLE](https://leetcode.com/tag/hash-table/), [STRING](https://leetcode.com/tag/string/), [TWO POINTERS](https://leetcode.com/tag/two-pointers/)

<br>
<br>
<br>
<br>
<br>

#### Hints: 

<br>

- Obviously, brute force will result in TLE. Think of something else.
- How will you check whether one string is a permutation of another string?
- One way is to sort the string and then compare. But, Is there a better way?
- If one string is a permutation of another string then they must one common metric. What is that?
- Both strings must have same character frequencies, if one is permutation of another. Which data structure should be used to store frequencies?
- What about hash table? An array of size 26?
