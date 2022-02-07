/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let res = [];
    let lo = 0, hi = s.length;
    for(let el of s){
        if(el === "I"){
            res.push(lo++);
        } else {
            res.push(hi--);
        }
    }
    res.push(lo);
    return res;
};