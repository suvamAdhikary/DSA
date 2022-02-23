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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    if(!root) return root;
     let queue = [root];
     let i = 0, j = 1;
     while(i < j){
         let current = queue[i++];
         let temp = current.left;
         current.left = current.right;
         current.right = temp;
         if(current.left) queue[j++] = current.left;
         if(current.right) queue[j++] = current.right;
     }
     return root;
 };
 