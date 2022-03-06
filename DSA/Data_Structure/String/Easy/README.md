# Check if the Sentence Is Pangram

<br>

## A pangram is a sentence where every letter of the English alphabet appears at least once.

## Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

<br>

## [Leetcode](https://leetcode.com/problems/check-if-the-sentence-is-pangram/)

<br>

### Example 1:
```
Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
```
<br>

### Example 2:
```
Input: sentence = "leetcode"
Output: false
``` 
<br>

### Constraints:

- 1 <= sentence.length <= 1000
- sentence consists of lowercase English letters.

### Tags: [STRING](https://leetcode.com/tag/string/), [HASH TABLE](https://leetcode.com/tag/hash-table/)

<br>
<br>
<br>
<br>
<br>

#### Hints:

<br>

- Iterate over the string and mark each character as found (using a boolean array, bitmask, or any other similar way).
- Check if the number of found characters equals the alphabet length.
- 
