/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var luckyNumbers  = function(matrix) {
    let res = [];
    for(let i = 0; i < matrix.length; i++){
        let min = Math.min(...matrix[i]);
        let minIndex = matrix[i].indexOf(min);
        let max = -1;
        for(let j = 0; j < matrix.length; j++){
            max = Math.max(max, matrix[j][minIndex]);
        }
        if(min === max) res.push(min);
    }
    return res;
};