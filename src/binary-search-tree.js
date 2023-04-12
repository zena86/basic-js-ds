const { NotImplementedError } = require('../extensions/index.js');

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
    return this.rootNode;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(data) {
    let newNode = new Node(data);
    if(this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.addNode(this.rootNode, newNode);
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  addNode(node, newNode) {
    if(newNode.data < node.data) {
      if(node.left === null) {
        node.left = newNode;
      }else {
        this.addNode(node.left, newNode);
      }
    } else {
      if(node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  has(data) {
    if(this.find(data)) {
      return true;
    } else {
      return false;
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {
    return this.search(this.rootNode, data);
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  search(node, data) {
    if(node === null)
      return null;
    else if(data < node.data)
      return this.search(node.left, data)
    else if(data > node.data)
      return this.search(node.right, data);
    else
      return node;
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  removeNode(node, value) {
    if(node === null) {
      return null;
    } else if (value < node.data) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.data) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      if(node.left === null && node.right === null) {
        node = null;
        return node;
      }if(node.left === null) {
        node = node.right;
        return node;
      }if(node.right === null) {
        node = node.left;
        return node;
      }
      let minNode = this.findMinNode(node.right);
      node.data = minNode.data;
      node.right = this.removeNode(node.right, minNode.data);
      return node;
    }
  }

  findMinNode(node) {
    if(node === null) {
      return null;
    }
    if(node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  min() {
    let minNode = this.findMinNode(this.rootNode);
    return minNode.data;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  findMaxNode(node) {
    if(node === null) {
      return null;
    }
    if(node.right === null) {
      return node;
    } else {
      return this.findMaxNode(node.right);
    }
  }

  max() {
    let maxNode = this.findMaxNode(this.rootNode);
    return maxNode.data;

    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};