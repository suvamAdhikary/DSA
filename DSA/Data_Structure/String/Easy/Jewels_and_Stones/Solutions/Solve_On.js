/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    let set = new Set(jewels);
    let res = 0;
    for(let el of stones){
        if(set.has(el)) res++;
    }
    return res;
};