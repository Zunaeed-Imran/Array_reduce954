const numbers = [1, -1, 2, 3];
let sum = 0;
for (let n of numbers)
  sum += n;

  
  numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  console.log(sum);