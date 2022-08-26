/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let res = 0;
    for(let i = 0; i < accounts.length; i++){
        let temp = accounts[i].reduce((a, b) => a + b);
        res = Math.max(res, temp);
    }
    return res;
};