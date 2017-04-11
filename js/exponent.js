var exponent = function(base, exp){
  var product = base;
  for(var i = 1; i < exp; i++){
    product *= base;
  }
  return product;
}

console.log(exponent(4,3), 'should be 64')




var recursiveExponent = function(base,exp){
  if(exp === 1){
    return base;
  } else {
    return base *= recursiveExponent(base, exp-1);
  }
}

console.log(recursiveExponent(4,4), 'should be 256');
