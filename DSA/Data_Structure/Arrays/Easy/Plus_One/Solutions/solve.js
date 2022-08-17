var plusOne = function(digits) {
    let len = digits.length;
    for(let i = len - 1; i >=0; i--){
        if(digits[i] === 9){
            if(i === 0){
                digits[i] = 1;
                digits[len] = 0;
            } else {
                digits[i] = 0;
            }
        } else {
            digits[i] = digits[i] + 1;
            break;
        }
    }
    return digits;
};