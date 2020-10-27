// console.log("Is this thing on?")

const reverse = function (arr) {
	const reversedArr = [];
  
  // loop through the array starting at the end
	for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i])
		reversedArr.push(arr[i]);
	}
	
  return reversedArr;
};

// console.log(reverse([1, 2, 3, 4]));

// -------------------------------------------------------------------------------------- 

const flatten = function (arr) {
	let flattenedArr = [];
	
  arr.forEach(function (elem) {
		if (Array.isArray(elem)) {
			flattenedArr = flattenedArr.concat(elem);
      // console.log(`Concat'ed inner array: ${flattenedArr}`)
		} else {
			flattenedArr.push(elem);
		}
	});
	
  return flattenedArr;
};

// console.log(flatten(['Hello', ['World', 42]]));



// -------------------------------------------------------------------------------------- 

const flattenBonus = function (arr, flattenedArr = []) {
  console.log(arr)
  console.log(flattenedArr)
	
  arr.forEach(function (elem) {
    console.log(`Element: ${elem}`)

		if (Array.isArray(elem)) {
			flattenBonus(elem, flattenedArr);
		} else {
			flattenedArr.push(elem);
      console.log(`Flattened array: ${flattenedArr}`)
		}

	});
	
  return flattenedArr;
};

console.log(flattenBonus(["Hello", [[["World"], 42]]]));

// console.log(
// 	flattenBonus([
// 		'hello',
// 		[
// 			[true, false, true],
// 			'world',
// 			42,
// 			[1, 2, ['a', 'b', ['A', [0, 1, 2], 'C']]],
// 		],
// 	]),
// );