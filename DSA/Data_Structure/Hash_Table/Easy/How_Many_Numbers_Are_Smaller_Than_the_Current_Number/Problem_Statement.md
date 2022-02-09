# How Many Numbers Are Smaller Than the Current Number

<br>

## Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

## Return the answer in an array.

<br>

## [Leetcode](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/)

<br>

### Example 1:
```
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
```
<br>

### Example 2:
```
Input: nums = [6,5,4,8]
Output: [2,1,0,3]
```
<br>

### Example 3:
```
Input: nums = [7,7,7,7]
Output: [0,0,0,0]
```
<br>

### Constraints:
```
2 <= nums.length <= 500
0 <= nums[i] <= 100
```

<br>

### Tags: [HASH TABLE](https://leetcode.com/tag/hash-table/), [ARRAY](https://leetcode.com/tag/array/), [COUNTING](https://leetcode.com/tag/counting/), [SORTING](https://leetcode.com/tag/sorting/)

<br>
<br>
<br>
<br>
<br>

#### Hints:

<br>

- Brute force for each array element.
- In order to improve the time complexity, we can sort the array and get the answer for each array element.
