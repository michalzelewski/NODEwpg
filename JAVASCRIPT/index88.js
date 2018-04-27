/*let number = 0;
let remainder = 0;

do {
    remainder = number % 2;
    if (remainder === 0) {
        console.log(number);
    }
    number++;
} while (number < 101);*/

// refactored to 'for'

for (let number = 0, remainder = 0; number < 101; number++) {
    remainder = number % 2;
    if (remainder === 0) {
    console.log(number);
    }
}

    