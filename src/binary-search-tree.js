const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    // Remove line below and write your code here
    return this.rootNode;
  }

  add(data) {
    // Remove line below and write your code here
    const newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

    let current = this.rootNode;

    while (true) {
      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else if (data > current.data) {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } else {
        return;
      }
    }
  }

  find(data) {
    // Remove line below and write your code here
    let current = this.rootNode;

    while (current !== null) {
      if (data === current.data) return current;
      if (data < current.data) current = current.left;
      else current = current.right;
    }

    return null;
  }

  has(data) {
    // Remove line below and write your code here
    return Boolean(this.find(data));
  }

  remove(data) {
    // Remove line below and write your code here
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, value) {
    if (node === null) return null;

    if (value < node.data) {
      node.left = this.removeNode(node.left, value);
      return node;
    }

    if (value > node.data) {
      node.right = this.removeNode(node.right, value);
      return node;
    }

    if (!node.left && !node.right) return null;

    if (!node.left) return node.right;

    if (!node.right) return node.left;

    const min = this.findMinNode(node.right);
    node.data = min.data;
    node.right = this.removeNode(node.right, min.data);

    return node;
  }

  findMinNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  min() {
    // Remove line below and write your code here
    let minNode = this.findMinNode(this.rootNode);
    return minNode.data;
  }

  findMaxNode(node) {
    while (node && node.right) {
      node = node.right;
    }
    return node;
  }

  max() {
    // Remove line below and write your code here
    let maxNode = this.findMaxNode(this.rootNode);
    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};