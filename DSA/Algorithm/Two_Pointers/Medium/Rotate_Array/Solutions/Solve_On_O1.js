/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    k %= nums.length;
    if(k === 0) return nums;

    reverse(0, nums.length - 1, nums);
    reverse(0, k - 1, nums);
    reverse(k, nums.length - 1, nums);
    return;
};

const reverse = (left, right, nums) => {
    while(left < right){
        let temp = nums[left];
        nums[left++] = nums[right];
        nums[right--] = temp;
    }
    return;
}
