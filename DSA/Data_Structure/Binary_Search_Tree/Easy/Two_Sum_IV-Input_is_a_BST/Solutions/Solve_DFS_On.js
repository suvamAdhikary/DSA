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
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    let set = new Set();
    return helper(root, set, k);
};
const helper = (root, set, k) => {
    if(!root) return false;
    if(set.has(k - root.val)) return true;
    set.add(root.val);
    return helper(root.left, set, k) || helper(root.right, set, k);
}
