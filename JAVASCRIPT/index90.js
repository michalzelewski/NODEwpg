/*let number = 1;
let sum = 0;

 do {
   sum = sum + number;
   console.log(sum);
   number = number + 2;
} while (number < 1001)*/

// refactored to 'for'

let number, sum;

number = 1;
sum = 0;

for (number = 1, sum = 0; number < 1001; number = number + 2) {
    sum = sum + number;
    console.log(sum);
}