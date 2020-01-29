function isEven(n){
  var number = Number(n);
  if (number % 2 == 0)
    return true;
  else
    return false;
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-5));
console.log(isEven(112));
console.log(isEven(0));
