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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    let res = [];
    let queue = [];
    if(!root) return res;
    let left = 0, right = 1;
    queue.push(root);
    while(left < right){
        let temp = [];
        for(let i = left; i < right; i++){
            temp.push(queue[i].val);
        }
        res.push(temp);
        for(let i = left; i < right; i++){
            if(queue[i].left) queue.push(queue[i].left);
            if(queue[i].right) queue.push(queue[i].right);
            left++;
        }
        right = queue.length;
    }
    return res;
};
