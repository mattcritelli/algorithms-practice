function bubbleSort(arr) {
  let isSorted;

  do {
    isSorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if(arr[i] > arr[i + 1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        isSorted = false;
      }
    }
  } while(!isSorted);

  return arr;
}
// console.log(bubbleSort([2, 7, 4, 6, 8, 1, 9]));

/**
 * 
 * bubbleSort2 tracks the number of loop throughs of the array.
 * After each iteration through the array, we know that the
 * the last (array.length - count) integers are fully sorted.
 */
function bubbleSort2(arr) {
  let isSorted;
  let count = 0;

  do {
    isSorted = true;
    let numSorted = arr.length - count;
    
    for (let i = 0; i < numSorted - 1; i++) {
      if(arr[i] > arr[i + 1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        isSorted = false;
      }
    }
    count++
  } while(!isSorted);

  return arr;
}

console.log(bubbleSort2([2,7,4,6,8,1,9]));