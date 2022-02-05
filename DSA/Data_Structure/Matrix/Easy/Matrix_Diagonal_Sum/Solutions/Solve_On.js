/**
 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) {
    let res = 0;
    for(let i = 0; i < mat.length; i++){
        if(i !== mat.length - 1 - i){
            res += mat[i][mat.length - 1 - i];
        }
        res += mat[i][i];
    }
    return res;
};