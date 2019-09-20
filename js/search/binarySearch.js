function iterativeBinarySearch(arr, num) {
  if (num < arr[0] || num > arr[arr.length-1]) return false;

  let start = 0;
  let end = arr.length - 1; 
  let middle = Math.floor((end + start) / 2); 

  while (start <= end) { 
    if (num === arr[middle]) {
      return true;
    } else if (num > arr[middle]) {
      start = middle + 1;
    } else if (num < arr[middle]) {
      end = middle - 1;
    }
    middle = Math.floor((end + start) / 2);
  }
  return false
}

console.log('true ->', iterativeBinarySearch([1, 3, 5, 7, 9, 10], 1));
console.log('true ->', iterativeBinarySearch([1, 3, 5, 7, 9, 10], 3));
console.log('true ->', iterativeBinarySearch([1, 3, 5, 7, 9, 10], 5));
console.log('true ->', iterativeBinarySearch([1, 3, 5, 7, 9], 7));
console.log('true ->', iterativeBinarySearch([1, 3, 5, 7, 9], 9));
console.log('true ->', iterativeBinarySearch([1, 3, 5, 7, 9, 10], 10));
console.log('false ->', iterativeBinarySearch([1, 3, 5, 7, 9, 10], 2));
console.log('false ->', iterativeBinarySearch([1, 3, 5, 7, 9, 10], 8));


function recursiveBinarySearch(arr, num) {
  if(arr.length === 0 || num < arr[0] || num > arr[arr.length-1]) return false;

  let midIdx = Math.floor((arr.length - 1) / 2);

  if (num === arr[midIdx]){
    return true;
  } else if (num < arr[midIdx]) {
    return recursiveBinarySearch(arr.slice(0, midIdx), num)
  } else if (num > arr[midIdx]) {
    return recursiveBinarySearch(arr.slice(midIdx + 1), num);
  }
}

// console.log('true ->', recursiveBinarySearch([1, 3, 5, 7, 9, 10], 1));
// console.log('true ->', recursiveBinarySearch([1, 3, 5, 7, 9, 10], 3));
// console.log('true ->', recursiveBinarySearch([1, 3, 5, 7, 9, 10], 5));
// console.log('true ->', recursiveBinarySearch([1, 3, 5, 7, 9], 7));
// console.log('true ->', recursiveBinarySearch([1, 3, 5, 7, 9], 9));
// console.log('true ->', recursiveBinarySearch([1, 3, 5, 7, 9, 10], 10));
// console.log('false ->', recursiveBinarySearch([1, 3, 5, 7, 9, 10], 2));
// console.log('false ->', recursiveBinarySearch([1, 3, 5, 7, 9, 10], 8));