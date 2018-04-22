let star = '*************';
let starLine = 1;

 do {
    console.log(star);
    star = star.substr(1, star.length);
    starLine++;
} while (starLine < 14);