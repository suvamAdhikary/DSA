/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    let res = [];
    const helper = (p, n, k, possible) => {
    if(possible.length === k){
        res.push([...possible]);
    }
    if(p > n){
        return;
    }
    for(let i = p; i <= n; i++){
        possible.push(i);
        helper(i + 1, n, k, possible);
        possible.pop();
    }
    }
    helper(1, n, k, []);
    return res;
};
