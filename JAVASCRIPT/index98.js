let sum = 0;

for (let number = 0; number <= 10000; number++) {
    sum = sum + number;
    if (sum <= 400) {
    console.log(sum);
    } else {
    break;
}
}