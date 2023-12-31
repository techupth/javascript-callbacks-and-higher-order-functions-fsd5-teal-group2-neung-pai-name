// Exercise #1: For Each Function

function forEach(array, operation) {
  for (let i = 0; i < array.length; i++) {
    const newSalary = operation(array[i]);
    newEmployeeSalaries.push(newSalary);
  }
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
function increaseSalary(salary) {
  const increasedSalary = salary + 5000;
  return increasedSalary;
}

forEach(employeeSalaries, increaseSalary);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
