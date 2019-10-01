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

  remove(index) {
    if (index < 0 || index > this.length - 1) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    removedNode.next = null
    removedNode.next = null;
    this.length--;
    return removeNode;
  }

  insert(index, value) {
    if (index < 0 || index > this.length - 1) return undefined;
    if (index === 0) {
      return this.unshift(value)
    }
    if(index === this.length) {
      return this.push(value)
    }
    let currNode = this.get(index);
    let newNode = new Node(value);
    let prevNode = currNode.prev;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = currNode;
    currNode.prev = newNode;
    this.length++;
    return this;
  }

  set(index, value) {
    let node = this.get(index);
    if(node) {
      node.value = value;
      return true;
    }
    return false;
  }

  get(index) {
    if(index < 0 || index > this.length - 1) return undefined;

    let currNode;

    if (index < Math.floor(this.length / 2)) {
      currNode = this.head;
      
      for(let i = 0; i < index; i++) {
        currNode = currNode.next;
      }
    } else {
      currNode = this.tail;

      for (let i = 0;  i < this.length - 1 - index; i++) {
        currNode = currNode.prev;
      }
    }
    return currNode;
  }

  // insert value to beginning of list
  unshift(value) {
    let newNode = new Node(value);

    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode; // point prev to newNode
      newNode.next = this.head; // point newNode.next to current head
      this.head = newNode; // re-assign this.head to be the newNode
    }


    this.length++;
    return this;
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

  // Push value at the end of list
  push(value) {
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

dll.push(95); // index: 0, this.length = 1
// console.log('\ndll after push 1', util.inspect(dll, { showHidden: false, depth: null }));

dll.push(100); // index: 1, this.length = 2
// console.log('\ndll after push 2', util.inspect(dll, { showHidden: false, depth: null }));

// dll.push('c'); // index: 2, this.length = 3
// console.log('dll after push 3', util.inspect(dll, { showHidden: false, depth: null }));

// dll.push('d'); // index: 3, this.length = 4
// console.log('dll after 4th push - "d"', util.inspect(dll, { showHidden: false, depth: null }));

console.log('\ndll', util.inspect(dll, { showHidden: false, depth: null }))