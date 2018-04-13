let playerName = 'Patrik Laine is lame';
let teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
let message = 'Winnipeg is the best Canadian citi, Go Winnipeg';

let firstCut = playerName.slice(0, -4); // Patrik Laine is
let secondCut = teams.slice(-26, -22); // jets
let thirdCut = message.slice(12, 21); // the best
let fourCut = message.slice(-13, -8); // , Go

let firstCutPart1 = firstCut.slice(0, -3); //getting 'patrick laine'
let firstCutPart2 = firstCut.slice(-3); // getting ' is'
let secondCutPart1 = secondCut.charAt(0); // getting 'j'
let secondCutPart2 = secondCut.slice(-3); // getting 'ets'

firstCutPart1 = firstCutPart1.toUpperCase(); // 'patrik laine' to uppercase
secondCutPart1 = secondCutPart1.toUpperCase(); // 'j' to uppercase

let template = `${firstCutPart1}${firstCutPart2}${thirdCut}${secondCutPart1}${secondCutPart2} player${fourCut}${secondCutPart1}${secondCutPart2}!!`;
 
console.log(template);