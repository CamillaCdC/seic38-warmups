const capLetter = function(sentence, letter) {
  const lettersArray = sentence.split('');
  // console.log(lettersArray)

  _.each(lettersArray, function (char, index) {
    if (char === letter) {
      lettersArray[index] = char.toUpperCase()
    }
  })

  return lettersArray.join('');
}


const recurringLetter = function (sentence) {
  const lettersArray = sentence.split(' ').join('').toLowerCase().split('');
  // console.log(lettersArray)

  const letterScores = {};
  let maxScore = 0;
  let maxLetter = '';
  
  lettersArray.forEach(function (char) {
    if (letterScores[char]) {
      letterScores[char] ++;
    } else {
      letterScores[char] = 1;
    }
  });

  // console.log(letterScores)

  // key = letter, value = score
  _.each(letterScores, function (value, key) {
    // console.log(`value: ${value}, key: ${key}`)
    let score = value;
    if (score > maxScore) {
      maxScore = score;
      maxLetter = key;
    }
  })

  console.log(`The recurring letter of '${sentence}' is ${maxLetter}`);
  console.log(`Sentence with caps: ${capLetter(sentence, maxLetter)}`);
}

// recurringLetter('just a simple sentence chilling');
// recurringLetter('I love mornings!');
// recurringLetter('More coffee please.')
recurringLetter('tests')