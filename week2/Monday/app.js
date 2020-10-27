
const originalWords = function(words) {
    const splitWords = words.split(' ');
    const originals = [];

    for (let i = 0; i < splitWords.length; i ++) {
        if (originals.includes(splitWords[i]) === false) {
            originals.push(splitWords[i])
        }
    }

    return originals.join(' ')
}

console.log(originalWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));


const bonus = function() {
    const result = 'b' + 'a' + + 'a' + 'a';
    return result.toLowerCase();
}

console.log(bonus())