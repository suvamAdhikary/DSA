/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    let res = 0;
    for(let i = 0; i < sentences.length; i++){
        sentences[i] = sentences[i].trim().split(" ");
        res = Math.max(res, sentences[i].length);
    }
    return res;
};