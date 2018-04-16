const message = "3.14 it's a great number but 42 it's the answer to life.";
let pi = message.substr(0, 4);
pi = parseFloat(pi);

let answerToLife = message.substr(29, 31);
answerToLife = parseInt(answerToLife);

let result = pi + answerToLife;

console.log(typeof result, result);

result = result.toString();

console.log(result.concat(' is the result of adding ', pi, ' and ', answerToLife));
console.log(typeof result);

