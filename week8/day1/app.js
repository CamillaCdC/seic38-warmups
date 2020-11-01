const pairwise = (arr, sum) => {
	const pairs = [];
	
  arr.forEach((element, index) => {
		const foundIndex = arr.indexOf(sum - element);
    
    console.log(`elem: ${element}, index: ${index}`)
    console.log(`found elem: ${sum - element}, found index: ${foundIndex}`)

    if (foundIndex >= 0) {
    // if (foundIndex != -1) {
			if (!pairs.includes(foundIndex) && !pairs.includes(index)) {
				pairs.push(foundIndex, index);
			}
		}

    console.log(`Pairs arr: ${pairs}`)
    console.log(`---------------------------`)

	});

  console.log(pairs)

	return `RESULT: ${pairs.reduce((acc, curr) => acc + curr)}`;
};

console.log(pairwise([7, 9, 11, 13, 15, 11], 20));