function range(start, end, step = start < end ? 1: -1){
  let num_array = [];
  if (step > 0){
    for (let i = start; i <= end; i+= step) num_array.push(i);
  } else {
    for (let i = start; i >= end; i+= step) num_array.push(i);
  }
  return num_array;
}

function sum(num_array){
  let total = 0;
  for(let i of num_array){
    total += i;
  }
  return total;
}

console.log(range(1,10));
console.log(sum(range(1, 10)));
console.log(range(5, 2, -1));
