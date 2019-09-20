/**
 * Selection Sort works by iterating through and array with nested loops.
 * The outer loop marks the current position in the array, where everything before it
 * is already sorted. The inner loop goes through the array in order to find the smallest
 * integer remaining in the array. Once found, you will swap the two integers and move
 * forward in the outer loop
 * 
 * POSSIBLE OPTIMIZATION:
 * 
 */

 function selectionSort(arr) {
 }

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallestIdx = i;
    
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[smallestIdx]) smallestIdx = j;
    }

    if (i !== smallestIdx) {
      let temp = arr[i];
      arr[i] = arr[smallestIdx];
      arr[smallestIdx] = temp;

      // not sure why this didnt work - problem with i variable
      // [arr[i], arr[smallestIdx]] = [arr[smallestIdx], arr[i]];
    }
  }
  return arr;
}


console.log(selectionSort([0, 2, 7, 4, 6, 8, 3, 9]));