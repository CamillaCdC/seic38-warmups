const happyNumbers = {

  happyList: [],

  findSquareSum: function (num) {
    let sum = 0;
    let stringNumber = num.toString();

    for (let i = 0; i < stringNumber.length; i++) {
      sum += stringNumber[i] * stringNumber[i];
    }

    return sum;
  },

  happyLogic: function (num) {
    let cycle = {};

    while (true) {
      num = this.findSquareSum(num)
      console.log(`NUM: ${num}`)

      if (num === 1) {
        return true;
      }

      if (cycle[num] === true) {
        return false;
      }

      cycle[num] = true;
    }
  },

  printNumbers: function (num) {
    let found = 0;

    for (let i = 1; found < num; i++) {  // start i at 1 because 0 is not a happy num
      console.log(`CHECKING: ${i}`)
      if (this.happyLogic(i)) {
        found++;
        this.happyList.push(i)
      }
    }

    return this.happyList
  }
}

console.log(happyNumbers.printNumbers(3));