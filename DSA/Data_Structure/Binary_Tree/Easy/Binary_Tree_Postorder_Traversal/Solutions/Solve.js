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
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    const stack = [];
    const res = [];
    let lastVisited = null;
    while(root || stack.length){
        if(root){
            stack.push(root);
            root = root.left;
        } else {
            let peek = stack[stack.length - 1];
            if(peek.right && peek.right !== lastVisited){
                root = peek.right;
            } else {
                res.push(peek.val);
                lastVisited = stack.pop();
            }
        }
    }
    return res;
};
