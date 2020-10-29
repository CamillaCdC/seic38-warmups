// This solution works perfectly and as expected
// Uses regex to find characters

const replacing = function (input) {
	let parts = input.split("', '")
  console.log(parts)
  
  parts = parts.map(function (part) {
		return part.replace(/'/g, '');
	});
  console.log(parts)

	let sentence = parts[0];
  console.log(sentence)
	const rules = parts.slice(1);
  console.log(rules)

	const toReplace = [];

	rules.forEach(function (rule) {
    let find = rule.split(',')[0]
    console.log(find)
    let replaceChr = rule.split(',')[1]

		const regex = new RegExp(find, 'g');
		
    let search = true;
		
    // while loop is looking for each instance of the character that needs to be replaced
    while (search) {
			search = regex.exec(sentence);
			if (search) {
        // creates obejct that is pushed to toReplace array
        // object has index of thing that needs to be replaced, and thing that it needs to be replaced with
				toReplace.push({
					index: search.index,
					replacement: replaceChr,
				});
			} else {
				search = false;
			}
		}
    
	});

  console.log(toReplace)
  console.log(sentence)

  // rebuilding of the string with the correct replacements
	toReplace.forEach(function (instance) {
		sentence =
			sentence.substr(0, instance.index) +
			instance.replacement +
			sentence.substr(instance.index + 1);
    console.log(sentence)
	});

	return sentence;
};

console.log(replacing("'The quick brown fox', 'o,$'"));
console.log('============================');
console.log(replacing("'quick', 'q,k', 'k,4'"));