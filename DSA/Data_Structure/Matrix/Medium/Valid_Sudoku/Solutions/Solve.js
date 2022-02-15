/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    let row = new Set();
    let col = new Set();
    let box = new Map();
    
    for(let i = 0; i < 9; i++){
        
        for(let j = 0; j < 9; j++){
            if(board[i][j] !== '.'){
                if(row.has(board[i][j])){
                    return false;
                } else {
                    row.add(board[i][j]);
                }
            }
            
            if(board[j][i] !== '.'){
                if(col.has(board[j][i])){
                    return false;
                }else {
                    col.add(board[j][i]);
                }
            }
            
            if(board[i][j] !== '.'){
                if(i < 3 && i >= 0){
                    if(j < 3 && j >= 0){
                        let temp = helper(1, board[i][j], box);
                        if(temp){
                            box = temp;
                        }else {
                            return false;
                        }
                    } else if (j < 6 && j > 2){
                        let temp = helper(2, board[i][j], box);
                        if(temp){
                            box = temp;
                        } else {
                            return false;
                        }
                    } else {
                        let temp = helper(3, board[i][j], box);
                        if(temp){
                            box = temp;
                        } else {
                            return false;
                        }
                    }
                } else if ( i < 6 && i > 2){
                    if(j < 3){
                        let temp = helper(4, board[i][j], box);
                        if(temp){
                            box = temp;
                        }else {
                            return false;
                        }
                    } else if (j < 6){
                        let temp = helper(5, board[i][j], box);
                        if(temp){
                            box = temp;
                        } else {
                            return false;
                        }
                    } else {
                        let temp = helper(6, board[i][j], box);
                        if(temp){
                            box = temp;
                        } else {
                            return false;
                        }
                    }
                } else {
                    if(j < 3){
                        let temp = helper(7, board[i][j], box);
                        if(temp){
                            box = temp;
                        }else {
                            return false;
                        }
                    } else if (j < 6){
                        let temp = helper(8, board[i][j], box);
                        if(temp){
                            box = temp;
                        } else {
                            return false;
                        }
                    } else {
                        let temp = helper(9, board[i][j], box);
                        if(temp){
                            box = temp;
                        } else {
                            return false;
                        }
                    }
                }
            }
            
        }
        row.clear();
        col.clear();
    }
    return true;
};

const helper = (n, k, box) => {
                    if(box.has(n)){
                        let temp = box.get(n);
                        if(temp.has(k)){
                            return false;
                        } else {
                            temp.add(k);
                            box.set(n, temp);
                        }
                    } else {
                        let temp = new Set();
                        temp.add(k);
                        box.set(n, temp);
                    }
    return box;
}