function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (!edges.length) return [0];
  const depth: number[] = Array(n).fill(0);
  const graph: number[][] = Array.from({ length: n }, () => []);

  for (let [node, child] of edges) {
    graph[node].push(child);
    graph[child].push(node);
    depth[node]++;
    depth[child]++;
  }

  let queue: number[] = [];
  let front = 0;
  for (let i = 0; i < depth.length; i++) {
    if (depth[i] === 1) queue.push(i);
  }
  while (n > 2) {
    const popEl = queue.length - front;
    n -= popEl;
    for (let i = 0; i < popEl; i++) {
      const currEl = queue[front++];
      for (const currGraph of graph[currEl]) {
        depth[currGraph]--;
        if (depth[currGraph] === 1) queue.push(currGraph);
      }
    }
  }
  return queue.slice(front);
}
