import { TreeNode } from "./treeNode";

function smallestFromLeaf(root: TreeNode | null): string {
  let letterMap = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
    10: "k",
    11: "l",
    12: "m",
    13: "n",
    14: "o",
    15: "p",
    16: "q",
    17: "r",
    18: "s",
    19: "t",
    20: "u",
    21: "v",
    22: "w",
    23: "x",
    24: "y",
    25: "z",
  };
  let startStr: string = "";
  let returnString: string = "";
  let strArr: string[] = [];
  const lowercaseA = "a".charCodeAt(0);
  const dfs = (node: TreeNode, runningStr: string, arr: string[]) => {
    let currStr = letterMap[node.val] + runningStr;
    if (node.left) {
      dfs(node.left, currStr, arr);
    }
    if (node.right) {
      dfs(node.right, currStr, arr);
    }
    if (!node.right && !node.left) {
      if (returnString === "") {
        returnString = currStr;
      } else if (returnString !== "") {
        const maxLength = Math.max(returnString.length, currStr.length);
        for (let i = 0; i < maxLength; i++) {
          if (currStr[i] !== returnString[i]) {
            if (i >= currStr.length) {
              returnString = currStr;
            }
            const currChar =
              i < currStr.length ? currStr.charCodeAt(i) - lowercaseA : 27;
            const returnChar =
              i < returnString.length
                ? returnString.charCodeAt(i) - lowercaseA
                : 27;
            if (returnString[i] && currChar < returnChar) {
              returnString = currStr;
            }
            break;
          }
        }
      }
    }
  };
  if (root) {
    dfs(root, startStr, strArr);
  }
  return returnString;
}
