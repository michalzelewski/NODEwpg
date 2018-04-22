let star = '*************';

//let starMinus = '*'
let starLine = 1;

while (starLine < 14) {
    console.log(star);
    star = star.substr(1, star.length);
    starLine++;
}