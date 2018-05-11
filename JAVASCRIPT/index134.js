/*Define a numbers array
Assign values between 1 and 1000
Iterate over the numbers array and add all numbers items
On each iteration show the partial result
    1
    3
    6
    ... so on
If the final result equals 50005000 then show the following ouput: Good job!!!
Else show: Take a look to see if something is wrong*/

const numbers = [];
let sum = 0;

for (let i = 0; i <= 1000; i++) {
    numbers.push(i);
    numbers[i] = i + 1;
    sum = numbers[i] + sum;
}
//console.log(numbers); checking if array is between 1 - 1000

if (sum === 50005000) {
    console.log('Good job!!!');
} else {
    console.log('Take a look to see if something is wrong');
}