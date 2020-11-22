// // VERSION 1

// const isIsogram = (word) => {

//   word = word.toLowerCase();

//   for (let i = 0; i < word.length; i++) {
//     for (var j = i+1; j < word.length; j++) {
//       if (word[i] === word[j]) {
//         return false
//       }
//     }
//   }
  
//   return true
// }

// VERSION 2

const isIsogram = (word) => {
  return new Set(word.toLowerCase()).size === word.length
}

console.log(isIsogram("Dermatoglyphics"));  // true
console.log('============================')
console.log(isIsogram("isogram"));          // true
console.log('============================')
console.log(isIsogram("aba"));              // false - same chars may not be adjacent
console.log('============================')
console.log(isIsogram("moOse"));            // false - same chars may not be same case
console.log('============================')
console.log(isIsogram("isIsogram"));        // false
console.log('============================')
console.log(isIsogram("") );                // true - an empty string is a valid isogram
console.log('============================')
console.log(isIsogram("this pony") );                
console.log('============================')
console.log(isIsogram("this pony abc") ); 