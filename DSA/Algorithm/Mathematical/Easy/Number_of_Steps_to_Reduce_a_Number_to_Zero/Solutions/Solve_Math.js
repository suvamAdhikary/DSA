/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
    let res = 0;
    while(num){
        res++;
        num % 2 !== 0 ? num -= 1 : num /= 2;
    };
    return res;
};
