/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
   let set = new Set(sentence);
    console.log(set);
    return set.size === 26;
};
