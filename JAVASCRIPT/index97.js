for (let number = 10000; number >= 0; number--) {
    if (number % 10 == 0) {
        if (number == 0 || number == 10000) // exclusive 0 and 10000 from ** number **
        { console.log(number);
        }
        else {
        console.log(`** ${number} **`);
        }
    }
    else {
    console.log(number);
}
}