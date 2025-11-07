const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

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
    // Remove line below and write your code here
    return this.root;
  }

  enqueue(value) {
    // Remove line below and write your code here
    const newNode = { value, next: null };

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  dequeue() {
    if (!this.root) return;
    // Remove line below and write your code here
    const result = this.root.value;
    this.root = this.root.next;
    return result;
  }
}

module.exports = {
  Queue
};
