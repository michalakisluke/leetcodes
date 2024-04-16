import { TreeNode } from "./treeNode";

function addOneRow(
  root: TreeNode | null,
  val: number,
  depth: number
): TreeNode | null {
  // val goes into the new depth
  // if left tree, depth.left
  // if right tree, depth.right
  const dfs = (node: TreeNode, currDepth: number) => {
    if (currDepth === depth - 1) {
      let newLeft = new TreeNode(val, node.left, null);
      let newRight = new TreeNode(val, null, node.right);
      node.right = newRight;
      node.left = newLeft;
    }
    if (node.right) dfs(node.right, currDepth + 1);
    if (node.left) dfs(node.left, currDepth + 1);
  };
  if (depth === 1) {
    return new TreeNode(val, root, null);
  } else {
    dfs(root!, 1);
    return root;
  }
}
