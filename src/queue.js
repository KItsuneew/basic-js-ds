const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node')


class Queue {
  list;

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    const node = new ListNode(value); // {value: value, next: null}

    if (this.list == undefined) this.list = node; //{5  {6 {7 null}
    else { // тут нужно до хвоста дойти и добавить в хвост его
      let current = this.list;

      while (current.next != null) {
        current = current.next;
      }
      current.next = new ListNode(value);
    }
    return this;
  }

  dequeue() {
    const p = this.list.value;
    this.list = this.list.next;
    return p;
  }
}

module.exports = {
  Queue
};
