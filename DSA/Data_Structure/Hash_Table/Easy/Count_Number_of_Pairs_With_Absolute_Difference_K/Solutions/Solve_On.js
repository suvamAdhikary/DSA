/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var countKDifference = function(nums, k) {
    let map = new Map();
    for(let num of nums){
        map.set(num, map.get(num) + 1 || 1);
    }
    let res = 0;
    for(let num of nums){
        if(map.has(num - k)){
            res += map.get(num - k);
        }
    }
    return res;
};