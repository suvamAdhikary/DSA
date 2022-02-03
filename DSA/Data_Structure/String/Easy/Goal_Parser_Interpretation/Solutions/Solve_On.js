/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let res = "";
    let i = 0;
    while(i < command.length){
        if(command[i] === "G"){
            res += "G";
        } else {
            if(command[i + 1] === "a"){
                res += "al";
                i += 3;
            } else {
                res += "o";
                i += 1;
            }
        }
        i++;
    }
    return res;
};