console.log('Collatz Conjecture');
console.log('========================');

const collatz = function (num) {

  let count = 0;
  let collection = [num];

  while (num > 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = (3 * num) + 1;
    }
    count++;
    collection.push(num)
  }

  console.log(`The function ran for ${count} times`);
  console.log(`The process was ${collection.join(', ')}`);
} 

// collatz(12);
// console.log('========================');
// collatz(19);
// console.log('========================');
// collatz(27);
// console.log('========================');


// RECURSION
const collatzRecur = function (num, count = 0) {

  if (num === 1) {
    console.log(`The function ran for ${count} times`);
    return
  }

  if (num % 2 === 0) {
    num = num / 2;
    count ++;
    collatzRecur(num, count);
  } else {
    num = (3 * num) + 1;
    count ++;
    collatzRecur(num, count);  
  }
}

console.log('RECURSION')
console.log('========================');
collatzRecur(12);
console.log('========================');
collatzRecur(19);
console.log('========================');
collatzRecur(27);