# Count the Number of Consistent Strings

<br>

## You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

## Return the number of consistent strings in the array words.

<br>

## [Leetcode](https://leetcode.com/problems/count-the-number-of-consistent-strings/)

<br>

### Example 1:
```
Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
```
<br>

### Example 2:
```
Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.
```
<br>

### Example 3:
```
Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
``` 
<br>

### Constraints:

- 1 <= words.length <= 104
- 1 <= allowed.length <= 26
- 1 <= words[i].length <= 10
- The characters in allowed are distinct.
- words[i] and allowed contain only lowercase English letters.

<br>

### tags: [STRING](https://leetcode.com/tag/string/), [ARRAY](https://leetcode.com/tag/array/), [BIT MANIPULATION](https://leetcode.com/tag/bit-manipulation/), [HASH TABLE](https://leetcode.com/tag/hash-table/)

<br>
<br>
<br>
<br>
<br>

#### Hints:

<br>

- A string is incorrect if it contains a character that is not allowed
- Constraints are small enough for brute force