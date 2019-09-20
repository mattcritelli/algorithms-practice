function countUniqueValues(arr) {
  if(arr.length <= 1) return arr.length;
  let count = 1;
  let p1 = 0;
  let p2 = 1;

  do {
    if(arr[p1] !== arr[p2]) {
      count++;
      p1 = p2;
    }
    p2 += 1;
  } while (p2 <= arr.length - 1); // important to use p2 and not p1 here
  
  return count;
}                   

// These will trigger short-circuit
console.log('0 ->', countUniqueValues([]));
console.log('1 ->', countUniqueValues([1]));
console.log('1 ->', countUniqueValues([1, 1]));
console.log('2 ->', countUniqueValues([1, 2]));
console.log('2 ->', countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log('4 ->', countUniqueValues([-2, -1, -1, 0, 1]));
console.log('7 ->', countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));