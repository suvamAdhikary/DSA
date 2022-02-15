/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    if(mat.length * mat[0].length !== r * c) return mat;
    let ref = [];
    for(let i = 0; i < mat.length; i++){
        ref = [...ref, ...mat[i]];
    }
    mat = [];
    if(r === 1){
        return [ref];
    }
    let k = 0;
    for(let i = 0; i < r; i++){
        let temp = []
        for(let j = k; j < k + c; j++){
            temp.push(ref[j]);
        }
        k += c;
        mat.push(temp);
    }
    console.log(ref)
    return mat;
};