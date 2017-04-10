function Stack(capacity) {
  this.capacity = capacity || Infinity;
  this.storage = {};
  this.count = 0;
}

Stack.prototype.push = function(value) {
  if(this.count < this.capacity){
    this.storage[this.count++] = value;
    return this.count;
  }
  return 'Max capacity reached';
};

Stack.prototype.pop = function() {
  var item = this.storage[--this.count];
  delete this.storage[this.count];
  return item;
};


Stack.prototype.peek = function() {
  return this.storage[this.count-1];
};


Stack.prototype.numItems = function() {
  return this.count;
};


var myStack = new Stack(3);

console.log(myStack.push('a'), 'should be 1');
console.log(myStack.push('b'), 'should be 2');
console.log(myStack.push('c'), 'should be 3');
console.log(myStack.push('d'), 'should be Max capacity reached');
console.log(myStack.pop(), 'should be c');
console.log(myStack.numItems(), 'should be 2');
console.log(myStack.peek(), 'should be b');
console.log(myStack.numItems(), 'should be 2');
console.log(myStack);
