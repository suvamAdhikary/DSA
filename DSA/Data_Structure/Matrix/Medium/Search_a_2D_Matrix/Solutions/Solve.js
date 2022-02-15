/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let lo = 0, hi = matrix.length - 1;
    while(lo <= hi){
        let mid = lo + Math.floor((hi - lo) / 2);
        if(matrix[mid][0] <= target && matrix[mid][matrix[mid].length - 1] >= target){
            if(matrix[mid][0] === target) return true;
            if(matrix[mid][matrix[mid].length - 1] === target) return true;
            let left = 0, right = matrix[mid].length - 1;
            while(left <= right){
                let m = left + Math.floor((right - left) / 2);
                if(matrix[mid][m] === target){
                    return true;
                } else if(matrix[mid][m] < target){
                    left = m + 1;
                } else {
                    right = m - 1;
                }
            }
            return false;
        } else if(matrix[mid][0] > target){
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return false;
};