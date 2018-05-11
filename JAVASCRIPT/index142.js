/*Define a firstPerson variable
Define a secondPerson variable
Assign a new array to each defined variable with the following structure
    The first item is the person first name (string)
    The second item is the person last name (string)
    The third item is the person address (string)
    The fourth item is the person age (number)
Use the reduce function over the firstPerson & secondPerson to get a string value back 
from each of them
Compare the strings result to see if they are the same person (if they are they should 
match)
Try using the same person (with different variables) and also try different people*/

const firstPerson = ['Michal', 'Zelewski', 'Portage 2510', 20];
const secondPerson = ['Martyna ', 'Smiech ', 'Portage 401 ', 20];

const resultFirstPerson = firstPerson.reduce(function(accumulator, currentValue) {
  return accumulator.concat(' ' + currentValue);
});

const resultSecondPerson = secondPerson.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(resultFirstPerson);
console.log(resultSecondPerson);