/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let res = 0;
    let n;
    ruleKey === "type" ? n = 0 : ruleKey === "color" ? n = 1 : n = 2;
    for(let i = 0; i < items.length; i++){
        if(items[i][n] === ruleValue) res++;
    }
    return res;
};