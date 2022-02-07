/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let left = 0, right = nums.length - 1;
    while(left < right){
        while(left < nums.length && nums[left] % 2 === 0) left++;
        
        while(right > -1 && nums[right] % 2 !== 0) right--;

        if(left >= right) return nums;
        
        if(left !== right){
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++, right--;
        }
    }
    return nums;
};