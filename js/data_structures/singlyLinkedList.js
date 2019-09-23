const util = require('util');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null,
    this.tail = null,
    this.length = 0;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return null;

    let node = this.head;
    let count = 0;

    while (count < index) {
      node = node.next;
      count++;
    };

    return node;
  }

  set(index, newValue) {
    let foundNode = this.get(index);
    if(foundNode) {
      foundNode.value = newValue
      return true;
    }
    return false; 
  }

  insertInto(index, newValue) {
    if (index < 0 || index > this.length - 1) return null;
    if(index === 0) {
      return this.unshift(newValue);
    }

    if(index === this.length - 1) {
      return this.insert(newValue);
    }

    let count = 0;
    let newNode = new Node(newValue);
    let prevNode = this.head;
    let nodeAtIndex = this.head.next

    while(count < index - 1) {
      nodeAtIndex = nodeAtIndex.next;
      prevNode = prevNode.next
      count++;
    }

    prevNode.next = newNode;
    newNode.next = nodeAtIndex;
    return this;
  }

  insert(value) {
    const newNode = new Node(value);

    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if(this.head === null) return null;
    let removedHead = this.head;
    
    if(this.head.next === null) {
      this.tail = null;
    } 

    this.head = this.head.next;
    this.length--;
    return removedHead;
  }
  
  pop() {
    if(this.head === null) return null; // no head

    let leadNode = this.head;
    let newTail = this.head;

    
    if(this.head === this.tail) { // only head value
      this.tail = null;
      this.head = null;
      this.length--;
      return leadNode;
    }

    while(leadNode.next) {
      newTail = leadNode;
      leadNode = leadNode.next
    }
    
    newTail.next = null;
    this.tail = newTail;
    this.length--;
    return leadNode;
  }

  unshift(value) {
    let newHead = new Node(value);

    if(!this.head) {
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    
        this.length++;
    return this;
  }



  
}

const list = new LinkedList();

// console.log('\nlist', list)

list.insert(10);
// console.log('\nlist after insert 1', util.inspect(list, { showHidden: false, depth: null }));

list.insert(20);
// console.log('\nlist after insert 2', util.inspect(list, { showHidden: false, depth: null }));

list.insert(30);
// console.log('list after insert 3', util.inspect(list, { showHidden: false, depth: null }));

list.insert(40);
// console.log('list after insert 3', util.inspect(list, { showHidden: false, depth: null }));

list.insertInto(2, 27);
// console.log('list after insert 3', util.inspect(list, { showHidden: false, depth: null }));

// list.pop();
// console.log('\n\n\nlist after pop 3', util.inspect(list, { showHidden: false, depth: null }));

// list.pop();
// console.log('\n\n\nlist after pop 2', util.inspect(list, { showHidden: false, depth: null }));

// list.pop();
// console.log('\n\n\nlist after pop 1', util.inspect(list, { showHidden: false, depth: null }));

// list.shift();
// console.log('\n\n\nlist after shift 1', util.inspect(list, { showHidden: false, depth: null }));

// list.shift();
// console.log('\n\n\nlist after shift 2', util.inspect(list, { showHidden: false, depth: null }));

// list.shift();
// console.log('\n\n\nlist after shift 3', util.inspect(list, { showHidden: false, depth: null }));

// list.unshift(1);
// console.log('\nlist after unshift 1', util.inspect(list, { showHidden: false, depth: null }));

// list.unshift(2);
// console.log('\n\n\nlist after unshift 2', util.inspect(list, { showHidden: false, depth: null }));

// list.unshift('fo real');
// console.log('\n\n\nlist after unshift 3', util.inspect(list, { showHidden: false, depth: null }));

// console.log('\nlist get', list.get(2));

// console.log('\nlist set', list.set(3, 88));

// list.insert(50);

console.log('\nlist', util.inspect(list, { showHidden: false, depth: null }))
