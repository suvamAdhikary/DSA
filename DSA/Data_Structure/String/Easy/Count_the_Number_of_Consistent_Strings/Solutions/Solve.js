/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
    let set = new Set(allowed);
    let res = words.length;
    for(let word of words){
        for(let str of word){
            if(!set.has(str)){
                res--;
                break;
            }
        }
    }
    return res;
};
