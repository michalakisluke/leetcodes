import { TreeNode } from "./treeNode";

function sumNumbers(root: TreeNode | null): number {
  return dfs(root, 0);
}

let dfs = (root: TreeNode | null, num: number): number => {
  if (!root) return 0;
  num = num * 10 + root.val;
  if (!root.left && !root.right) {
    return num;
  }
  let leftSum = dfs(root.left, num);
  let rightSum = dfs(root.right, num);
  return leftSum + rightSum;
};
