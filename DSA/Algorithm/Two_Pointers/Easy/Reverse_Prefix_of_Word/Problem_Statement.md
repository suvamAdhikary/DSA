# Reverse Prefix of Word

<br>

## Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

## For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
## Return the resulting string.

<br>

## [LeetCode](https://leetcode.com/problems/reverse-prefix-of-word/)

<br>

### Example 1:
```
Input: word = "abcdefd", ch = "d"
Output: "dcbaefd"
Explanation: The first occurrence of "d" is at index 3. 
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
```
<br>

### Example 2:
```
Input: word = "xyxzxe", ch = "z"
Output: "zxyxxe"
Explanation: The first and only occurrence of "z" is at index 3.
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".
```
<br>

### Example 3:
```
Input: word = "abcd", ch = "z"
Output: "abcd"
Explanation: "z" does not exist in word.
You should not do any reverse operation, the resulting string is "abcd".
```

<br>

### Constraints:
```
1 <= word.length <= 250
word consists of lowercase English letters.
ch is a lowercase English letter.
```

### Tags: [TWO POINTERS](https://leetcode.com/tag/two-pointers/), [STRING](https://leetcode.com/tag/string/)

<br>
<br>
<br>
<br>
<br>

#### Hints

<br>

- Find the first index where ch appears.
- Find a way to reverse a substring of word.