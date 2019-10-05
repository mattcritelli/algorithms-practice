const util = require('util');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  traverse(node, value) {
    return value < node.value
      ? node.left
      : node.right
  }

  find(value) {
    if(!this.root) return false;

    let currNode = this.root;

    while (currNode !== null) {
      if (currNode.value === value) return true;
      currNode = this.traverse(currNode, value);
    }
    return false;
  }

  insert(value) {
    const newNode = new Node(value);

    if(!this.root) this.root = newNode;
    if(this.root.value === value) return undefined;

    let currNode = this.root;
    let nextNode = this.traverse(currNode, value);
    
    while (nextNode !== null) {
      if (nextNode.value === value) return undefined;
      
      currNode = nextNode;
      nextNode = this.traverse(currNode, value);
    }

    if (value < currNode.value) {
      currNode.left = newNode;
    } else {
      currNode.right = newNode;
    }

    return this;
  }
}

let bst = new BinarySearchTree();

// console.log('\n\nempty bst\n', bst);

bst.insert(50);

// console.log('\n\nbst with root value of 50\n', bst);

bst.insert(30);

// console.log('\n\nbst insert 30\n', bst);

bst.insert(80);

// console.log('\n\nbst insert 80\n', bst);

bst.insert(45);
bst.insert(35);
bst.insert(40);
bst.insert(90);
bst.insert(95);
bst.insert(100);
bst.insert(87);

// console.log('\n\nbst insert 4\n', bst);
// console.log('\n\nbst at end\n', util.inspect(bst, { showHidden: false, depth: null }))

console.log(bst.find(40));







// OLD SOLUTIONS //

// insert(value) {
//   const newNode = new Node(value);

//   if(!this.root) {
//     this.root = newNode;
//   } else {
//     let currNode = this.root;
//     let found = false;

//     while(!found) {
//       if (value < currNode.value) {
//         if(currNode.left) {
//           currNode = currNode.left;
//         } else {
//           currNode.left = newNode;
//           found = true;
//         }
//       } else if(value > currNode.value) {
//         if(currNode.right) {
//           currNode = currNode.right;
//         } else {
//           currNode.right = newNode;
//           found = true;
//         }
//       }
//     }
//   }
//   return this;
// }