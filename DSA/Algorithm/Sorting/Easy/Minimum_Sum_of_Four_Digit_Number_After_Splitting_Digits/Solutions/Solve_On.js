/**
 * @param {number} num
 * @return {number}
 */
 var minimumSum = function(num) {
    
    num = "" + num;
    num = num.split("").map(Number);
    
    let n1 = Math.min(...num);
    
    let index = num.indexOf(n1);
    
    num = num.filter((el, i) => i !== index);
    
    let n2 = Math.min(...num);
    
    index = num.indexOf(n2);
    
    num = num.filter((el, i) => i !== index);

    n1 = n1 * 10 + num[0];

    n2 = n2 * 10 + num[1];
    
    return n1 + n2;
};