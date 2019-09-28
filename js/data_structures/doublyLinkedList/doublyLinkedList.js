const util = require('util');

class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // remove node from begining of list
  shift() {
    if (this.length === 0) return undefined;
    let poppedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let newHead = this.head.next;
      this.head = newHead;
      this.head.prev = null;
    }

    poppedNode.next = null;
    this.length--;
    return poppedNode;
  }

  pop() {
    if(this.tail === null) return undefined;
    let oldTail = this.tail;

    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  // Insert value at the end of list
  insert(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // set next of current tail to new Node
      newNode.prev = this.tail; // point prev of newNode/new Tail back to this.tail;
      this.tail = newNode; // update value of this.tail to be the new node

      // Figure out why solution below doesn't work
      // let oldTail = this.tail;
      // this.tail = newNode;
      // oldTail.next = this.tail;
      // this.tail.prev = oldTail;
    }
    this.length++;
    return this;
  }
}

let dll = new DoublyLinkedList();

// console.log('\ndll', dll)

dll.insert(99); // index: 0, this.length = 1
// console.log('\ndll after insert 1', util.inspect(dll, { showHidden: false, depth: null }));

dll.insert(100); // index: 1, this.length = 2
// console.log('\ndll after insert 2', util.inspect(dll, { showHidden: false, depth: null }));

// dll.insert('c'); // index: 2, this.length = 3
// console.log('dll after insert 3', util.inspect(dll, { showHidden: false, depth: null }));

// dll.insert('d'); // index: 3, this.length = 4
// console.log('dll after 4th insert - "d"', util.inspect(dll, { showHidden: false, depth: null }));

console.log('\ndll', util.inspect(dll, { showHidden: false, depth: null }))