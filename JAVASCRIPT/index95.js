/*let i = 0;
let f;
let f1 = 1;
let f2 = 1;

console.log(f2);
console.log(f1);
do {
  f = f1 + f2;
  console.log(f);
  f2 = f1;
  f1 = f;
  i++;
} while (i < 8);*/

// code has been refactored to 'for' method

let i = 0;
let f;
let f1 = 1;
let f2 = 1; 

console.log(f2);
console.log(f1);

for (let i = 0, f, f1 = 1, f2 = 1; i < 8; i++) {
    f = f1 + f2;
    console.log(f);
    f2 = f1;
    f1 = f;
}