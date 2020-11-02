const number = {
	hasNonNumerals: function(num) {
    // return /\D/.test(num); // returns true or false

    // console.log(num.replace(/[^0-9]/g, ""))
    return num.replace(/\D/g, "");
	},

	elevenTest: function(num) {
		if (num[0] === '1') {
			return num.slice(1);
		} else {
			return false;
		}
	},

	formatToNumber: function(num) {
		// (123) 456-7890
		let out = '';
		out += `(${num.slice(0, 3)}) `;
		out += `${num.slice(3, 6)}-`;
		out += `${num.slice(6)}`;
		return out;
	},

	format: function(num) {
		let numString = this.hasNonNumerals(num.toString());
		const invalid = '0000000000';
		
    if (numString.length < 10 || numString.length > 11) {
			return invalid;
		} 

		if (numString.length === 11) {
			const afterElevenTest = this.elevenTest(numString);
			if (afterElevenTest === false) {
				return invalid;
			} else {
				// numString = afterElevenTest;
        return this.formatToNumber(afterElevenTest)
			}
		}

    if (numString.length === 10) {
			return this.formatToNumber(numString);
    }
	}
};

console.log(number.format(321)); // invalid - too short
console.log('==================================')
console.log(number.format('321s')); // invalid - too short
console.log(`==================================`)
console.log(number.format('12345t67890s')); // VALID - once chars are removed
console.log(`==================================`)
console.log(number.format(11234567890)); // VALID - 11 long
console.log(`==================================`)
console.log(number.format(1123456789012)); // invalid - too long
console.log(`==================================`)
console.log(number.format(1234567890)); // VALID - 10 long
console.log(`==================================`)
console.log(number.format(`11234pony56789012`)); // invalid - too long
console.log(`==================================`)

console.log(number.format(`1123-45678-9012`)); // invalid - too long
