/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let right = word.indexOf(ch);
    if(right === -1) return word;
    word = word.split("");
    let left  = 0;
    while(left < right){
        let temp = word[left];
        word[left] = word[right];
        word[right] = temp;
        left++, right--;
    }
    return word.join("");
};