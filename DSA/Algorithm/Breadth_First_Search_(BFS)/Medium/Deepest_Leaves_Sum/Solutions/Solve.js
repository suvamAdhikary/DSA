/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var deepestLeavesSum = function(root) {
    let queue = [root], index = 0, res, len;
    while(queue.length - index){
        res = 0;
        len = queue.length;
        for(let i = index; i < len; i++){
            let current = queue[index++];
            res += current.val;
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }
    return res;
};
