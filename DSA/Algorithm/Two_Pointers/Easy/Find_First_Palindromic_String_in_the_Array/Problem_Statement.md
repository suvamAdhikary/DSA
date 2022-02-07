# Find First Palindromic String in the Array

<br>

## Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

## A string is palindromic if it reads the same forward and backward.

<br>

## [LeetCode](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/)

<br>

### Example 1:
```
Input: words = ["abc","car","ada","racecar","cool"]
Output: "ada"
Explanation: The first string that is palindromic is "ada".
Note that "racecar" is also palindromic, but it is not the first.
```
<br>

### Example 2:
```
Input: words = ["notapalindrome","racecar"]
Output: "racecar"
Explanation: The first and only string that is palindromic is "racecar".
```
<br>

### Example 3:
```
Input: words = ["def","ghi"]
Output: ""
Explanation: There are no palindromic strings, so the empty string is returned.
``` 
<br>

### Constraints:
```
1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists only of lowercase English letters.
```

### Tags: [TWO POINTERS](https://leetcode.com/tag/two-pointers/), [ARRAY](https://leetcode.com/tag/array/), [STRING](https://leetcode.com/tag/string/)

<br>
<br>
<br>
<br>
<br>

#### Hints:

<br>

- Iterate through the elements in order. As soon as the current element is a palindrome, return it.
- To check if an element is a palindrome, can you reverse the string?