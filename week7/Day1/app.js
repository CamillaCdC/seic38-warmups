console.log("Is this thing on?")

const findAllergies = function (score) {
  const scorecard = {
    "cats": 128,
    "pollen": 64,
    "chocolate": 32,
    "tomatoes": 16,
    "strawberries": 8,
    "shellfish": 4,
    "peanuts": 2,
    "eggs": 1
  };

  let allergyList = [];

  Object.keys(scorecard).forEach(function(key) {
    console.log(`Score: ${score}`);

    if (score >= scorecard[key]) {
      allergyList.push(key);
      console.log(`Allergy: ${key}`)
      score -= scorecard[key];
      console.log(`Updated Score: ${score}`);
    }
  });

  if (allergyList.length > 0){
    return `Allergies: ${allergyList.join(', ')}`;
  } else {
    return 'No allergies';
  }
}

console.log(findAllergies(34));
// console.log(findAllergies(88));