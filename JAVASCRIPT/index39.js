const firstName = 'Michael';
const lastName = 'Zelewski';
const nameCharacters = firstName.length;
const lastNameCharacters = lastName.length;
const charDifference = lastName.length - firstName.length;
const output = `My first name is ${firstName} and it has ${nameCharacters} characters long
My last name is ${lastName} and it has ${lastNameCharacters} characters long
The character difference between my first name and last name is ${charDifference}`;

console.log(output, '\nMy first name is longer than my last name:', firstName.length > lastName.length);