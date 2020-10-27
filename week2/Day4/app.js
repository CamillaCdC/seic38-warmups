const anagram = function (potentialAnagram, words) {
	const matches = [];
	const sortedAnagram = potentialAnagram.split(' ').sort().join('').trim();
    
	for (let i = 0; i < words.length; i++) {
		const sortedWord = words[i].split('').sort().join('').trim();
        console.log(sortedWord)
		
        if (sortedAnagram === sortedWord) {
			matches.push(words[i])
		}
	}

	return matches;
}

console.log(anagram("listen", ["enlists", "silent", "inlets", "banana"]))

console.log(anagram("debit card", ["money", "bad credit", "consumerism"]))

console.log(anagram("define anagram", ["google", "joke", "nerd fame again"]))