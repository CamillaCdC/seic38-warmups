console.log("Is this thing on?")

const planetData = {
    Earth: 1,
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132
};

const spaceAge = function (ageInSeconds) {
    let ageInEarthYears = ageInSeconds / 31557600;
    // console.log(ageInEarthYears)
    let output = ''
    
    for (let planets in planetData) {
        let age = (ageInEarthYears / planetData[planets]).toFixed(2);
        // console.log(age)
        output += `Your age on ${planets} is ${age} ${planets} years.\n`;
        // console.log(output)
        // console.log(`Your age in ${planets} is ${age} ${planets} years`);
    }

    return output;
};

console.log(spaceAge(1000000000));

// BONUS
const spaceAgeBonus = function (ageInSeconds, planet) {
    let ageInEarthYears = ageInSeconds / 31557600;
    let age = (ageInEarthYears / planetData[planet]).toFixed(2)

    return `Your age on ${planet} is ${age} ${planet} years.`;
};

console.log(spaceAgeBonus(1000000000, 'Venus'));