console.log("Good morning!")

// this solution uses underscore 
// this solution DOES NOT WORK for replacing("'quick', 'q.k', 'k,4'") - it outputs 4uic4 (should be kuic4)

const replacing = function (input) {
	let parts = input.split("', '")
  console.log(parts)
  
  parts = parts.map(function (part) {
		return part.replace(/'/g, '');
	});
  console.log(parts)
  console.log(parts[0])

	let sentence = parts[0];
  let sentenceArr = sentence.split('')
  console.log(sentenceArr)

	const rules = parts.slice(1);
  console.log(rules)

  let newSentence = []

	rules.forEach(function (rule) {
    // console.log(rule.split(','))

    let lookFor = rule.split(',')[0]
    let replaceWith = rule.split(',')[1]

    _.each(sentenceArr, function (char, index) {
      if (char === lookFor) {
        sentenceArr[index] = replaceWith
      } else {
        
      }          
    });

  })
  
	return sentenceArr.join('');
};

console.log(replacing("'The quick brown fox', 'o,$'"));
console.log('============================');
console.log(replacing("'quick', 'q,k', 'k,4'"));