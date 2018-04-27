// using code from ex 75 (advance) //
let i = 0;
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
} while (i < 8);