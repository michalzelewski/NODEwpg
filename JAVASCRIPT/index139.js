/*Define a numbers array with values between 1000 and 1
Iterate over the numbers array and filter the following values creating new arrays for 
each type:
  Even numbers
  Odd numbers
Show the last 10 odd numbers as output
Show the first 20 even numbers as output*/

const numbers = [];

for (i = 1000; i >= 1; i--) {
    numbers.push(i);
}

const filterEvenNumbers = numbers.filter(function(evenNumber, index) {
    return evenNumber % 2 === 0 && index < 40;
});

const filterOddNumbers = numbers.filter(function(oddNumber, index) {
    return oddNumber % 2 === 1 && index >= numbers.length - 20;
});

console.log(filterEvenNumbers);
console.log(filterOddNumbers);