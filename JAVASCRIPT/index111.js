/*Define a even function that has one numeric parameter and returns a boolean value
This function must validate if the number passed as parameter is an even number or not (true or false)
Call this function using the following parameters: 2, 5, 3, 24, 12
If the number is even show the following message: %number% is even
Else show the following message: %number% is odd*/
let number;

function even(number) {

    if (0 === number % 2) {
        return true
    } else {
        return false
    }
}

number = 2;

if(even(number)) {
    console.log( `${number} is even`);
}
else {
    console.log( `${number} is odd`);
}

number = 5;

if(even(number)) {
    console.log( `${number} is even`);
}
else {
    console.log( `${number} is odd`);
}

number =3;

if(even(number)) {
    console.log( `${number} is even`);
}
else {
    console.log( `${number} is odd`);
}

number =24;

if(even(number)) {
    console.log( `${number} is even`);
}
else {
    console.log( `${number} is odd`);
}

number =12;

if(even(number)) {
    console.log( `${number} is even`);
}
else {
    console.log( `${number} is odd`);
}