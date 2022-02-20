/**
 * @param {number} num
 * @return {number}
 */
 var countEven = function(num) {
    let count = 0;
    for(let i = 2; i <= num; i++){
        let nums = "" + i;
        let check = 0;
        for(let j = 0; j < nums.length; j++){
            check += +nums[j];
        }
        if(check % 2 === 0) count++;
    }
    return count;
};
