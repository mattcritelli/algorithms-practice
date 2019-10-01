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

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node; // these 2 lines swao head & tail

    console.log('node', node);
    console.log('\n\nthis.head', this.head);
    console.log('\n\nthis.tail', this.tail);
    
    let next;
    let prev = null;

    for(let i = 0; i < this.length; i++) {
      next = node.next; // sets next to store remaining nodes in list
      node.next = prev;  // sets next value of current node to prev
      prev = node; // sets prev variable to current node
      node = next; // sets current node to next node
    }
  }

  // reverse() {
  //   let nextNode = this.head;
  //   let remainingList = this.head.next;

  //   this.tail = nextNode; // set head to tail
  //   this.tail.next = null; // break connection by setting next to null

  //   while (remainingList.next !== null) {
  //     this.length--;
  //     this.unshift(remainingList.value);
  //     remainingList = remainingList.next;
  //   }
  //   this.unshift(remainingList.value);
  //   this.length--;
  //   return list;
  // }

  remove(index) {
    if(index < 0 || index > this.length - 1) return null;
    if(index === 0) return this.shift ();
    if(index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let removed = prevNode.next;

    prevNode.next = removed.next;
    return removed;
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
    if (index < 0 || index > this.length - 1) return null; // index is out of range
    if(index === 0) {
      return this.unshift(newValue); // insert at head
    }

    if(index === this.length - 1) {
      return this.insert(newValue); // insert at tail
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

list.insert('a'); // index: 0, this.length = 1
// console.log('\nlist after insert 1', util.inspect(list, { showHidden: false, depth: null }));

// list.insert('b'); // index: 1, this.length = 2
// console.log('\nlist after insert 2', util.inspect(list, { showHidden: false, depth: null }));

// list.insert('c'); // index: 2, this.length = 3
// console.log('list after insert 3', util.inspect(list, { showHidden: false, depth: null }));

// list.insert('d'); // index: 3, this.length = 4
// console.log('list after 4th insert - "d"', util.inspect(list, { showHidden: false, depth: null }));

// list.insertInto(2, 27);
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

// console.log('remove', list.remove(2));
// console.log('reversed', list.reverse());

console.log('\nlist', util.inspect(list, { showHidden: false, depth: null }))
