/**
 * @param {string} s
 * @return {string}
 */
 var toLowerCase = function(s) {
    let res = '';
    for(let i = 0; i < s.length; i++){
        if(s.charCodeAt(i) < 91 && s.charCodeAt(i) >= 65){
            res += String.fromCharCode(s.charCodeAt(i) + 32);
        } else {
            res += s[i];
        }
    }
    return res;
};
