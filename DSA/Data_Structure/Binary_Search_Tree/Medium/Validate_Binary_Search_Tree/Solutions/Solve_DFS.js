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
 * @return {boolean}
 */
 var isValidBST = function(root) {
    return helper(root, null, null);
};

const helper = (root, min, max) => {
    if(!root) return true;
    if(min && root.val <= min.val || max && root.val >= max.val) return false;
    return helper(root.left, min, root) && helper(root.right, root, max)
}
