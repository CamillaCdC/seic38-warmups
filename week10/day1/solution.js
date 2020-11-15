console.log('PRIME FACTORS');


// CAMILLA'S SOLUTION

const primeFactors = function (num) {

  let factors = [];

  let i = 2;

  while (num > 1) {
    if (num % i === 0) {
      factors.push(i);
      num = num / i;
    } else {
      i++
    }
  }
  
  return factors;
}

console.log(primeFactors(60));




// ANOTHER SOLUTION

const primeFactors = {

  range: [],

  primeRange: [],

  factors: [],

  findRange: function (number) {
    for (let i = 0; i <= number; i++) {
      this.range.push(i);
    }
    return this.range;
  },

  findPrimeRange: function (array) {

    let isPrime;

    for (let i = 0; i < array.length; i++) {
      isPrime = true;

      for (let j = 2; j < array[i]; j++) {
        if (array[i] % j === 0) {
          isPrime = false;
        }
      }

      if (isPrime === true) {
        this.primeRange.push(array[i])
      }
    }
    return this.primeRange;
  },

  findPrimeFactors: function (number) {
    let primes = this.findPrimeRange(this.findRange(number));

    for (let i = 2; i < primes.length; i++) {
      while (number % primes[i] === 0) {
        this.factors.push(primes[i])
        number = number / primes[i];
      }
    }
    return this.factors;
  }
}

console.log(primeFactors.findPrimeFactors(60));