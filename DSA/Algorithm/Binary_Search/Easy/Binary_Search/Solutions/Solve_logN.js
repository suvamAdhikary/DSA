/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let lo = 0, hi = nums.length - 1;
    while(lo <= hi){
        let mid = lo + Math.floor((hi - lo) / 2);
        if(nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return -1;
};
