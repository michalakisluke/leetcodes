import { TreeNode } from "./treeNode";

function sumOfLeftLeaves(root: TreeNode | null): number {
  let arr: number[] = [];
  let nodes: (TreeNode | null)[] = [root];
  while (nodes.length) {
    let curr: TreeNode | null = nodes.pop() ?? null;
    if (curr && curr.left) {
      if (isLeaf(curr.left)) arr.push(curr.left.val);
      nodes.push(curr.left);
    }
    if (curr && curr.right) {
      nodes.push(curr.right);
    }
  }
  return arr.reduce((a, b) => a + b, 0);
}

let isLeaf = (node: TreeNode): boolean => {
  return !node.left && !node.right;
};
