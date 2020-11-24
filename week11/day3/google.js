const findMatch = (array, sum) => {

  // VERSION 1
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i+1; j < array.length; j++) {
//       if (array[i] + array[j] === sum) {
//         console.log(`${array[i]} + ${array[j]} = ${sum}`)
//         return true
//       }
//     }
//   }

//   return false
// }

// VERSION 2
  for (let i = 0; i < array.length; i++) {
    const difference = sum - array[i]

    const resultArray = array.filter(num => num === difference && difference !== array[i])

    if (resultArray.length !== 0) {
      return true
    }
  }   

  return false
}

console.log(findMatch([3, 5, 1, 4], 9))
console.log("=======================")
console.log(findMatch([3, 5, 1, 4, 2], 7))