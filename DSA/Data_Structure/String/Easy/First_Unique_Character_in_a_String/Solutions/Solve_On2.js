/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    for(let el of s){
        if(s.indexOf(el) === s.lastIndexOf(el)) return s.indexOf(el);
    }
    return -1;
};
