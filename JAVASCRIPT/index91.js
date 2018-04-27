/*let number = 9;
let output;
let times = 1;

 do {
    output = number * times;
    console.log(output);
    times++;
} while (times < 11);*/

// code refactored to 'for' method

let number, output, times;

number = 9;
output;
times = 1;

for (number = 9, output, times = 1; times < 11; times++) {
    output = number * times;
    console.log(output);
}