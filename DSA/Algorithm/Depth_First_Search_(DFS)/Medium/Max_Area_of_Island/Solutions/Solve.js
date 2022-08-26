/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    let res = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 1) res = Math.max(res, helper(grid, i, j));
        }
    }
    return res;
};

const helper = (grid, i, j) => {
    if(i >=0 && j >= 0 && i < grid.length && j < grid[0].length && grid[i][j] === 1){
        grid[i][j] = 0;
        return 1 + helper(grid, i - 1, j) + helper(grid, i + 1, j) + helper(grid, i, j + 1) + helper(grid, i, j - 1);
    }
    return 0;
}
