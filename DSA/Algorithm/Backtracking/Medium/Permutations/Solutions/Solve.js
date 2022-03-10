/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    if(nums.length < 2) return [nums];
    let res = [];
    let set = new Set();
    const helper = (n, arr) => {
        if(arr.length === nums.length){
            let temp = arr.join('');
            if(!set.has(temp)){
                res.push([...arr]);
                set.add(temp);
            }
        }
        if(n === nums.length) return;
        let temp;
        for(let i = n; i < nums.length; i++){
            temp = arr[i];
            arr[i] = arr[n];
            arr[n] = temp;
            helper(n + 1, arr);
            temp = arr[i];
            arr[i] = arr[n];
            arr[n] = temp;
        }
    }
    helper(0, nums);
    return res;
};
