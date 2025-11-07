const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  // Remove line below and write your code here
  let prev = null;
  let cur = l;
  let result = cur;
  while (cur !== null) {
    if (cur.value === k) {
      if (prev === null) {
        result = cur.next;
      } else {
        prev.next = cur.next;
      }
    } else {
      prev = cur;
    }
    cur = cur.next;
  }
  return result;
}

module.exports = {
  removeKFromList
};
