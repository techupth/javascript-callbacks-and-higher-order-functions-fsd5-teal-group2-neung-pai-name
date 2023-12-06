//Exercise #2: At Least Five Function
function atLeastFive(array, operation) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      count++;
      if (count >= 5) {
        return true;
      }
    }
  }
  return false;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

const checkScore = function (score) {
  return score > 70;
};

let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkScore);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkScore);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkScore);

console.log(scoreRoom1Result); //  true or false
console.log(scoreRoom2Result); //  true or false
console.log(scoreRoom3Result); //  true or false
