/**
 * My original solution was destructive to the input array, the solution
 * below preserves original input array.
 */

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
  // return quickSort(valsOfNumsToMove).concat(pivot, quickSort(arr));
}

console.log(quickSort([4, 1, 9, 3, 5, 6, 8, 2, 7]));



/**
 * MY INITIAL SOLUTION
 */
function quickSort2(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr.splice(0, 1);
  let valsOfNumsToMove = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if(arr[i] < pivot) {
      valsOfNumsToMove.push(arr.splice(i, 1)[0])
    }
  }

  return [...quickSort(valsOfNumsToMove), ...pivot, ...quickSort(arr)];
  // return quickSort(valsOfNumsToMove).concat(pivot, quickSort(arr));
}



// console.log(quickSort2([4, 1, 9, 3, 5, 6, 8, 2, 7]));
