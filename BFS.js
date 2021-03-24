class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    let currentNode = this.root;
    if (!this.root) {
      return this.root = newNode;
    }
      
    while (currentNode) {
      if (value > currentNode.value) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      } else {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      }
    }
  }
  lookup(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      } else {
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
    return null;
  }

  remove(value) {
    let currentNode = this.root;
    let previousNode;
    let replacementNode;
    let replacementNodeParent;
    while (currentNode) {
      if (currentNode.value === value) {
        //removing a leaf
        if (!currentNode.left && !currentNode.right) {
          if (currentNode.value < previousNode.value) {
            previousNode.left = null;
            return this;
          } else {
            previousNode.right = null;
            return this;
          }
        }

        //removing nodes that are not leafs
        const replacementData = this._findReplacementNode(currentNode);
        replacementNodeParent = replacementData.parentNode;
        replacementNode = replacementData.replacementNode;
        // parent node of replacement node points to null
        if (replacementNode.value < replacementNodeParent.value) {
          replacementNodeParent.left = replacementNode.right;
        } else {
          replacementNodeParent.right = null;
        }
        // replacementNode.left and right point to currentNode.left and right
        replacementNode.left = currentNode.left;
        replacementNode.right = currentNode.right;
        //point previousNode to replacementNode
        if (currentNode.value === this.root.value) {
          this.root = replacementNode;
        } else {
          if (replacementNode.value > previousNode.value) {
            previousNode.right = replacementNode;
          } else {
            previousNode.left = replacementNode;
          }
        }

        return this;
      } else if (value < currentNode.value) {
        previousNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        previousNode = currentNode;
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  _findReplacementNode(currentNode) {
    let parentNode = currentNode;
    let replacementNode = currentNode.right;

    if (replacementNode === null) {
      replacementNode = currentNode.left;
      return {
        parentNode: parentNode,
        replacementNode: replacementNode
      };
    }

    while (replacementNode.left) {
      parentNode = replacementNode;
      replacementNode = replacementNode.left;
    }

    return {
        parentNode: parentNode,
        replacementNode: replacementNode
      };
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return list;
  }
}

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);