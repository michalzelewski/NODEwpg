/*let star = '*';
let starLine = 1

 do {
    console.log(star);
    star = star + '**';
    starLine++;
} while (starLine < 8)*/

// code has been refactored to 'for' method

for (let star = '*', starLine = 1; starLine <= 7; starLine++) {
    console.log(star);
    star = star + '**';
}