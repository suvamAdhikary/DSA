/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    // if(s.length === 1) return 1;
    let set = new Set();
    let i = 0, j = 0;
    let res = 0;
    while(j < s.length){
        if(!set.has(s[j])){
            set.add(s[j]);
            j++
        } else {
            res = Math.max(res, set.size);
            for(i; i < j; i++){
                set.delete(s[i]);
                if(s[i] === s[j]) {
                    i++;
                    break;
                }
            }
        }
    }
    res = Math.max(res, set.size);
    return res;
};
