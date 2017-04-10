function Queue(capacity) {
  this.capacity = capacity || Infinity;
  this.storage = {};
  this.count = 0;
  this.first = 0;
}

Queue.prototype.enqueue = function(value) {
  if((this.count-this.first) < this.capacity){
    this.storage[this.count] = value;
    return this.count++;
  }
  return "Line too long";
};


Queue.prototype.dequeue = function() {
  var next = this.storage[this.first];
  delete this.storage[this.first];
  this.first++;
  return next;
};


Queue.prototype.peek = function() {
  return this.storage[this.first];
};


Queue.prototype.numInLine = function() {
  var inLine = this.count - this.first;
  if(inLine > 0){
    return inLine;
  }
  return "No one in Line";
};



myQueue = new Queue(3);
console.log(myQueue.numInLine(), 'should be No one in line');
console.log(myQueue.enqueue("alpha"), 'should be 0');
console.log(myQueue.enqueue("bravo"), 'should be 1');
console.log(myQueue.enqueue("charlie"), 'should be 2');
console.log(myQueue.enqueue("delta"), 'should be Line too long');
console.log(myQueue.dequeue(), 'should be alpha');
console.log(myQueue.numInLine(), 'should be 2');
console.log(myQueue.peek(), 'should be bravo');
console.log(myQueue.dequeue(), 'should be bravo');
console.log(myQueue.enqueue("delta"), 'should be 3');
console.log(myQueue.dequeue(), 'should be charlie');
console.log(myQueue.numInLine(), 'should be 1');
