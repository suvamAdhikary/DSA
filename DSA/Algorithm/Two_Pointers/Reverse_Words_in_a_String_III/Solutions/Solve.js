/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.split(" ");
    for(let i = 0; i < s.length; i++){
        s[i] = reverse(s[i]);
    }
    return s.join(" ").trim();
};

const reverse = (str) => {
    let i = 0, j = str.length - 1;
    str = str.split("");
    while(i < j){
        let temp = str[i];
        str[i] = str[j];
        str[j] = temp;
        i++, j--;
    }
    return str.join("").trim();
}