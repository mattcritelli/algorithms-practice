const util = require('util');

class LinkedList {
  constructor(data) {
    this.head = {data: data, next: null},
    this.tail = null,
    this.length = 1;
  }

  insertHead(data) {
    const newNode = {data: data, next: this.head};
    this.head = newNode;
    this.length++;
  }




}

const linkedlist = new LinkedList(1);

console.log('\nlinkedlist', linkedlist)

linkedlist.insertHead(2);
linkedlist.insertHead(3);
linkedlist.insertHead(4);

console.log('\nlinkedlist', util.inspect(linkedlist, { showHidden: false, depth: null }))