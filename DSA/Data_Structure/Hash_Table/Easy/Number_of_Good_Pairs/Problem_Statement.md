# Number of Good Pairs

<br>

## Given an array of integers nums, return the number of good pairs.

## A pair (i, j) is called good if nums[i] == nums[j] and i < j.

<br>

## [Leetcode](https://leetcode.com/problems/number-of-good-pairs/)

<br>

### Example 1:
```
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
```
<br>

### Example 2:
```
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
```
<br>

### Example 3:
```
Input: nums = [1,2,3]
Output: 0
``` 
<br>

### Constraints:
```
1 <= nums.length <= 100
1 <= nums[i] <= 100
```

<br>

### Tags: [HASH TABLE](https://leetcode.com/tag/hash-table/), [ARRAY](https://leetcode.com/tag/array/), [MATH](https://leetcode.com/tag/math/), [COUNTING](https://leetcode.com/tag/counting/)

<br>
<br>
<br>
<br>
<br>

#### Hints: 

<br>

- Count how many times each number appears. If a number appears n times, then n * (n – 1) // 2 good pairs can be made with this number.
