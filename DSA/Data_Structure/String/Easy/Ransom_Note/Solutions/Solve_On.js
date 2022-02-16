/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    let map = new Map();
    for(s of magazine){
        if(map.has(s)){
            map.set(s, map.get(s) + 1);
        }else {
            map.set(s, 1);
        }
    }
    for(let s of ransomNote){
        if(map.has(s)){
            if(map.get(s) > 0){
                map.set(s, map.get(s) - 1);
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
};