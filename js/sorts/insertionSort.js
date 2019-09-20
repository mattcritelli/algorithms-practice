/**
 * Insertion Sort works with 2 nested for loops.
 * The outer loop (i) starts at index 1 and the inner loop(j)
 * iterates up from 0 to current value of i and checks to see
 * if value of i is less than any of value of j.
 * If it is, it will splice i from the array, and insert it
 * at the current position of j.
 * 
 * This maintains the array length and each pointer will not lose
 * their correct position in the array.
 */

function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    for(let j = 0; j < i; j++) {
      console.log(i, j);
      if(arr[i] < arr[j]) {
        let deletedVal = arr.splice(i, 1)
        arr.splice(j, 0, deletedVal[0])
        break;
      }
    }
  }
  return arr;
}

console.log(insertionSort([1, 4, 5, 8, 9, 3, 6, 2, 7]));
//                                  i
//                               j