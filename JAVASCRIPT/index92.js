/*let star = '*';
let starLine = 1;

 do {
    console.log(star);
    star = star + '*';
    starLine++;
} while (starLine < 14);*/

// code refactored to 'for' method

for (let star = '*', starLine = 1; starLine <= 13; starLine++) {
    console.log(star);
    star = star + '*'; 
}