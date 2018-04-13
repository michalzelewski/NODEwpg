const text = 'HELLO';
let result;
const firstChar = text.charAt(4);
const secondChar = text.charAt(3);
const thirdChar = text.charAt(2);
const fourthChar = text.charAt(1);
const fivethChar = text.charAt(0);
result = firstChar.concat(secondChar + thirdChar + fourthChar + fivethChar);
result = result.toLowerCase();

console.log(result);
