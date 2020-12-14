depthFirstReachable(startingNode, targetNode) {
  if ((!this.adjacencyList.has(startingNode)) || (!this.adjacencyList.has(targetNode))) {
    return false;
  }
  let stack = [startingNode];
  let traversedNodes = new Set();
  while (stack.length) {
    const currentNode = stack.shift();
    if (currentNode === targetNode) {
      return true;
    } else {
      traversedNodes.add(currentNode);
      const adjacencyList = this.adjacencyList.get(currentNode);
      adjacencyList.forEach(function(node) {
        if (!traversedNodes.has(node)) {
          stack.unshift(node);
        }
      });
    }
  }
  return false;
}