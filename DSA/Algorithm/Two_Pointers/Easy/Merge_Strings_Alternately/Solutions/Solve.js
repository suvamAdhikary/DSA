/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = "";
    let a = 0, b = 0;
    while(a < word1.length && b < word2.length){
        res += word1[a++];
        res += word2[b++];
    }
    while(a < word1.length) res += word1[a++];
    while(b < word2.length) res += word2[b++];
    return res;
};