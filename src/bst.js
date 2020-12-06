export default class BST {
  constructor() {
    this.root = null;
  }

  insertNode(node) {
    this.root = node;
  }

  insert(insertedNode) {
    if (this.root === null) {
      this.root = insertedNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data > insertedNode.data) {
          if (currentNode.left === null) {
            currentNode.left = insertedNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (currentNode.data < insertedNode.data) {
          if (currentNode.right === null) {
            currentNode.right = insertedNode;
            return this;
          } else {
            currentNode = currentNode.right
          }
        }
        else {
          return this;
        }
      }
    }
  }

  search(value) {
    if (this.root.data === value) {
      return true;
    } else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.data === value) {
          return true;
        } else if (currentNode.data > value) {
          currentNode = currentNode.left;
        } else if (currentNode.data < value) {
          currentNode = currentNode.right;
        }
        if (currentNode === null) {
          return false;
        }
      }
    }
  }

 remove(value) {
  let currentNode = this.root
   const removeNode = (currentNode, value) => {
    if(currentNode = null) {
      return null
    }
    if (value == currentNode.data) {
      if (currentNode.left == null && currentNode.right == null) {
        return null
      }
      if (currentNode.left == null) {
        return currentNode.right
      }
      if (currentNode.right == null) {
        return currentNode.left
      }

      const tempNode = currentNode.right
      while (tempNode.left !== null) {
        tempNode = tempNode.left
      }
      currentNode.data = tempNode.data
      currentNode.right = removeNode(currentNode.right, tempNode.data)
      return currentNode
    } else if (value < currentNode.data) {
      currentNode.left = removeNode(currentNode.left, value)
      return currentNode
    } else {
      currentNode.right = removeNode(currentNode.right, value)
      return currentNode
    }  
  } 
 currentNode = removeNode(currentNode, value)
}

  // remove(value) {

  //   if (this.root.data === value) {
  //     this.root.data = null
  //     return this.root.data
  //   } else {
  //     let currentNode = this.root;
  //       if (currentNode.data === value) {
  //         if (currentNode.left.data === null && currentNode.right.data === null) {
  //           currentNode.data = null
  //           return currentNode.data
  //           // } else if (currentNode.left.data !== null) {
  //           //   currentNode = currentNode.left;
  //           // } else if (currentNode.right.data !== null) {
  //           //   currentNode = currentNode.right;
  //           // }
          
  //         } else {
  //           return ('nothing')
  //         }
  //       }
  //     }
  //   }
  // }
}
