const { NotImplementedError } = require('../extensions/index.js');

//const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor () {
    this.root = null;
  }

  getUnderlyingList() {
    return this.root;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    if(this.root === null) {
      this.root = {value: value, next: null};
    }else {
      let tailNode = this.getTailNode(this.root);
      tailNode.next = {value: value, next: null};
    }
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  getTailNode(node){
    if(node.next) {
      return this.getTailNode(node.next);
    }
    return node;
  }

  dequeue() {
    const result = this.root.value;
    this.root = this.root.next;
    return result;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
