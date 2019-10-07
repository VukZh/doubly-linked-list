const Node = require("./node");

class LinkedList {
  constructor() {
    this.linkedList = [];
    this.length = 0;
    this._head = new Node();
    this._tail = new Node();
  }

  append(data) {
    const appNode = new Node(data);
    this.linkedList.push(appNode);
    this.length++;
    return this;
  }

  head() {
    return this.length === 0 ? null : this.linkedList[0].data;
  }

  tail() {
    return this.length === 0 ? null : this.linkedList[this.length - 1].data;
  }

  at(index) {
    return this.linkedList[index].data;
  }

  insertAt(index, data) {
    this.linkedList.splice(index, 0, new Node(data));
    return this;
  }

  isEmpty() {
    return this.length === 0;
  }

  clear() {
    this.linkedList = [];
    this.length = 0;
    return this;
  }

  deleteAt(index) {
    this.linkedList.splice(index, 1);
    return this;
  }

  reverse() {
    this.linkedList.reverse();
    return this;
  }

  indexOf(data) {
    let indexOfLinkedList = -1;
    this.linkedList.map((el, i) => {
      if (el.data === data) indexOfLinkedList = i;
    });
    return indexOfLinkedList;
  }
}

module.exports = LinkedList;
