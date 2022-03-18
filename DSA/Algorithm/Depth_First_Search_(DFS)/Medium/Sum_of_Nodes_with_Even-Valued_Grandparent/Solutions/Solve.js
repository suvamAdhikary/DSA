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
 var sumEvenGrandparent = function(root) {
    return helper(root, 0);
};

const helper = (root, res) => {
    if(!root) return res;
    if(root.val % 2 === 0){
        return (root?.left?.left?.val || 0) + (root?.left?.right?.val || 0)
            + (root?.right?.left?.val || 0) + (root?.right?.right?.val || 0) 
                + helper(root.left, res) + helper(root.right, res);
    } else {
        return helper(root.left, res) + helper(root.right, res);
    }
}
