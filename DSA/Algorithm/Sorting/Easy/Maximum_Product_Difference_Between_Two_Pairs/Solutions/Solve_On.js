/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProductDifference = function(nums) {
    let a = Math.min(nums[0], nums[1]), b = Math.max(nums[0], nums[1]), c = 0, d = 0;
    
    for(let i = 0; i < nums.length; i++){
        
        if(i > 1) if(nums[i] < a){
            b = a;
            a = nums[i];
        } else if (nums[i] < b){
            b = nums[i];
        }
        
        if(nums[i] > d){
            c = d;
            d = nums[i];
        } else if (nums[i] > c){
            c = nums[i];
        }
    }
    
    return (c * d) - (a * b);
};
