/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    for(let num of nums){
        if(nums.indexOf(num) !== nums.lastIndexOf(num)) return true;
    }

    return false;
};