/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var smallerNumbersThanCurrent = function(nums) {
    let ref = [...nums].sort((a,b) => a - b);
    for(let i = 0; i < nums.length; i++){
        nums[i] = ref.indexOf(nums[i]);
    }
    return(nums);
};