/**
 * @param {string} s
 * @return {number}
 */
 var maxDepth = function(s) {
    let res = 0;
    let stack = [];
    for(el of s){
        if(el === '('){
            stack.push(el);
        }
        if(el === ")"){
            res = Math.max(res, stack.length);
            stack.pop();
        }
    }
    return res;
};
