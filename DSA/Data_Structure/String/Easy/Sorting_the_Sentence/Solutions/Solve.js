/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    s = s.split(" ");
    let res = [];
    for(let i = 0; i < s.length; i++){
        let temp = s[i];
        temp = temp.split("");
        temp.pop();
        temp = temp.join("").trim();
        res[+s[i][s[i].length - 1]] = temp;
    }
    return res.join(" ").trim();
};