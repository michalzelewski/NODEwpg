let income = 1000;
let revenue = 600;
let taxes = 500;

let objectiveIncome = 800;
let objectiveTaxes = 400;
let objectiveBonus = 600;

//console.log(`Income Objective: ${income}` >= `${objectiveIncome}`);
console.log('Income Objective:', income >= objectiveIncome);
console.log('Taxes Objective:', taxes <= objectiveTaxes);
console.log('Bonus Objective:', revenue == objectiveBonus);