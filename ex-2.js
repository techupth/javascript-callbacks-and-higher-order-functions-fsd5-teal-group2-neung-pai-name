function atLeastFive(array, operation) {
  const highScores = array.filter(operation);
  return highScores.length >= 5;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

const isHighScore = (score) => score > 70;

let scoreRoom1Result = atLeastFive(studentScoresRoom1, isHighScore);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, isHighScore);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, isHighScore);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
