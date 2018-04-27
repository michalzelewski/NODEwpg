let sum = 0;
let countTwentyEven = 0;

for (let number = 0; number <= 10000; number++) {
    if (number % 2 == 0) {
        sum = sum + number;
        countTwentyEven++;
        if (countTwentyEven <= 20) {
            console.log(sum);
        } else {
            break;
        }
    }   
}