/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let res = [];
    let left = 0, right = nums.length - 1;
    for(let i = nums.length - 1; i >= 0; i--){
        if(Math.abs(nums[left]) > Math.abs(nums[right])){
            res[i] = nums[left++]**2;
        } else {
            res[i] = nums[right--]**2;
        }
    }
    return res;
};
