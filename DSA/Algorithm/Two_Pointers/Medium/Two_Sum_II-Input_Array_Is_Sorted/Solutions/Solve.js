/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1;
    while(left < right){
        let k = numbers[left] + numbers[right];
        if(k === target) return [left + 1, right + 1];
        if(k < target){
            left++;
        } else {
            right--;
        }
    }
};
