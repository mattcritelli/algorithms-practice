    /**
     * Merge Sort works by splitting an array in half
     * and recursively calling mergeSort on each half until
     * the length of the array is <= 1 and it satisfies the base case.
     * 
     * The result of this recursve call is passed back up
     * the stack as parameters to a helper stich function.
     * 
     * Since these are sorted, the stitch function compares the first
     * value of each array and pushes the smallest value into a new array.
     * When either of the arrays are empty you concat both arrays with
     * the output array and return the stitched/sorted arrays.
     */


    function stitch(leftArr, rightArr) {
      let output = [];

      while(leftArr.length > 0 && rightArr.length > 0) {
        if(leftArr[0] <= rightArr[0]) {
          let val = leftArr.shift();
          output.push(val);
        } else {
          let val = rightArr.shift();
          output.push(val);
        }
      }
      return output.concat(leftArr, rightArr);
    }

    // console.log(stitch([3,6,8], [1,4,9]));

    function mergeSort(arr) {
      if (arr.length <= 1) return arr;

      const midPoint = Math.floor(arr.length / 2);
      const left = arr.slice(0, midPoint);
      const right = arr.slice(midPoint);

      return stitch(mergeSort(left), mergeSort(right));
    }

    // console.log(mergeSort([]));
    console.log(mergeSort([1, 4, 5, 8, 9, 3, 6, 2, 7]));