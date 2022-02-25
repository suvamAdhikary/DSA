# Subtract the Product and Sum of Digits of an Integer

<br>

## Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 
<br>

## [Leetcode](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/)

<br>

### Example 1:
```
Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
```
<br>

### Example 2:
```
Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
``` 
<br>

### Constraints:
```
1 <= n <= 10^5
```

<br>

### Tags: [MATH](https://leetcode.com/tag/math/)

<br>
<br>
<br>
<br>
<br>

#### Hints:

<br>

- How to compute all digits of the number ?
- Use modulus operator (%) to compute the last digit.
- Generalise modulus operator idea to compute all digits.
