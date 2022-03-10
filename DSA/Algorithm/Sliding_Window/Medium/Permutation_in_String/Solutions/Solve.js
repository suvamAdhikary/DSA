/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;
    let s1Map = new Map();
    let s2Map = new Map();
    for(let s of s1){
        s1Map.has(s) ? s1Map.set(s, s1Map.get(s) + 1) : s1Map.set(s, 1);
    }
    let start = 0, end = 0;
    while(end < s2.length){
        let currentWindow = end - start;
        s2Map.has(s2[end]) ? s2Map.set(s2[end], s2Map.get(s2[end]) + 1) : s2Map.set(s2[end], 1);
        if(currentWindow === s1.length -1){
            if(helper(s1Map, s2Map)) return true;
            s2Map.get(s2[start]) > 1 ? s2Map.set(s2[start], s2Map.get(s2[start]) - 1) : s2Map.delete(s2[start]);
            start++;
        } 
        end++;
    }
    return false;
};

const helper = (map1, map2) => {
    for(let s of map2){
        if(map1.get(s[0]) !== s[1]) return false;
    }
    return true;
}
