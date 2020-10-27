const scrabble = function (
    word = '', 
    doubleLetters = [], 
    trippleLetters = [], 
    isDoubleWord = false, 
    isTrippleWrod = false) {

// const scrabble = function (word, doubleLetters, trippleLetters, isDoubleWord, isTrippleWrod) {

	let totalPoints = 0;
	
    const points = {
		a: 1,
		e: 1,
		i: 1,
		o: 1,
		u: 1,
		l: 1,
		n: 1,
		r: 1,
		s: 1,
		t: 1,
		d: 2,
		g: 2,
		b: 3,
		c: 3,
		m: 3,
		p: 3,
		f: 4,
		h: 4,
		v: 4,
		w: 4,
		y: 4,
		k: 5,
		j: 8,
		x: 8,
		q: 10,
		z: 10,
	};

	for (let i = 0; i < word.length; i ++) {

        let letter = word[i];

		if (doubleLetters.includes(letter) === true) {
        	totalPoints += points[letter] * 2;
			doubleLetters.splice(doubleLetters.indexOf(letter), 1)
		
        } else if (trippleLetters.includes(letter) === true) {
			totalPoints += points[letter] * 3;
			trippleLetters.splice(trippleLetters.indexOf(letter), 1);
		
        } else {
			totalPoints += points[letter]
		}

	}

	if (isDoubleWord === true) {
		totalPoints *= 2
	}

	if (isTrippleWrod == true) {
        totalPoints *= 3
    }

	return totalPoints;
}

// console.log(scrabble(''));
// console.log(scrabble('coffee', [], [], false, false));
console.log(scrabble('coffee', [],[], '', true ))
// console.log(scrabble('coffee', ['o', 'f'], ['c', 'e'], true, false));