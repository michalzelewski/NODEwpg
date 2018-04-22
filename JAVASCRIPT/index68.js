let number = 0;
let remainder = 0;

/*while (number < 100) {
   number = number + 2;
   console.log(number);
}*/

while (number < 101) {
    remainder = number % 2;
    if (remainder === 0) {
        console.log(number);
    }
    number++;
}