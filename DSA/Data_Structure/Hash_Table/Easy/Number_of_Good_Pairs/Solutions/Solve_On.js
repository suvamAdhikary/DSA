/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    let map = new Map();
    for(let num of nums){
        if(map.has(num)){
            let temp = map.get(num);
            map.set(num, ++temp);
        }else {
            map.set(num, 1);
        }
    }
    let res = 0;
    for(let el of map){
        if(el[1] > 1){
            let add = 
            res += el[1] * (el[1] - 1) / 2
        }
    }
    // console.log(map)
    return res;
};