function naiveStringSearch(str, searchTerm) {
  if(searchTerm.length === 0 || str.length === 0) return 0;
  let count = 0;
  let idx = 0;

  while (idx <= str.length - searchTerm.length) {
    if(str[idx] === searchTerm[0]) {
      const subStr = str.slice(idx, idx + searchTerm.length);
      console.log('subStr', subStr);
      
      if (subStr === searchTerm) {
        count++;
        idx += searchTerm.length;
      } else {
        idx++;
      }
    } else {
      idx++;
    }
  }
  return count;
};


console.log('0', naiveStringSearch('zomomg', 'zzomg'));
console.log('2', naiveStringSearch('zomomg', 'om'));
console.log('0', naiveStringSearch('zomomg', ''));
