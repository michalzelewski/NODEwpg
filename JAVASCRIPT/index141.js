/*Define a tripExpenses array with the following values:
    The first item is hotel fee, it's a number, type a value that you like
    The second item is trip fee, it's a number, type a value that you like
    The third item is meals fee, it's a number, type a value that you like
Define a budget variable and assign the sum of all the tripExpenses using map
Show the tripExpenses items as output with the following format:
    hotel: %tripExpenses first item%, trip: %tripExpenses second item%, meals: %tripExpenses third item%
Show the final budget items as output with the following format
    Total trip budget: %budget%*/


const tripExpenses = [
    250,
    500,
    200
];

let expensesSum = 0;

const budgetSum = tripExpenses.map(function(expense) {
    expensesSum = expensesSum + expense;
    return expensesSum;
});

let budget = budgetSum.pop();

console.log(`hotel: ${tripExpenses[0]}, trip: ${tripExpenses[1]}, meals: ${tripExpenses[2]}`);
console.log(`Total trip budget: ${budget}`);