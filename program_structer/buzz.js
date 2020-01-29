for (let n = 1; n <= 100; n++){
  let str = '';
  if (n % 3 == 0) str += 'Fizz';
  if (n % 5 == 0) str += 'Buzz';
  console.log(str || n);
}
