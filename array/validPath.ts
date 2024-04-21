function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  let adjacencyMap: Map<number, number[]> = new Map();

  for (const [u, v] of edges) {
    if (!adjacencyMap.has(u)) {
      adjacencyMap.set(u, []);
    }
    if (!adjacencyMap.has(v)) {
      adjacencyMap.set(v, []);
    }
    adjacencyMap.get(u)?.push(v);
    adjacencyMap.get(v)?.push(u);
  }

  const queue = [source];
  const visited = Array(n).fill(false);
  visited[source] = true;

  while (queue.length >= 1) {
    let curr = queue.pop();
    if (curr === destination) {
      return true;
    } else {
      const connections = adjacencyMap.get(curr!);
      if (connections)
        connections.forEach((connection) => {
          if (!visited[connection]) {
            visited[connection] = true;
            queue.push(connection);
          }
        });
    }
  }

  return false;
}
