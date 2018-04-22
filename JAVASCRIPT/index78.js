let number = 0;
let remainder = 0;

do {
    remainder = number % 2;
    if (remainder === 0) {
        console.log(number);
    }
    number++;
} while (number < 101);