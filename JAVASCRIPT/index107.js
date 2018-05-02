/*Define a biggerNumber function that will expect two parameters with the name firstNumber and secondNumber (numeric)
Call the biggerNumber and pass two numbers as parameters 3 for firstNumber and 5 for secondNumber
The biggerNumber must the following output: Number %firstNumber% is bigger than %secondNumber%
In this case you need to validate which number is bigger than the other to get the right feature and output
Also add the validation to check if both numbers are equal, if so then show the following message: Both numbers are %number%
Make sure that the parameters are numbers, you can use typeof for it
Show a error message in case any of the parameters are not number
Call the biggerNumber with the following parameters: 6 and 3
Call the biggerNumber with the following parameters: 2 and 2*/

function biggerNumber(firstNumber, secondNumber) {

    if (typeof firstNumber === 'number' && typeof secondNumber === 'number') {

        if (firstNumber > secondNumber) {
        console.log(`Number ${firstNumber} is bigger than ${secondNumber}`);
        }
        if (secondNumber > firstNumber)
        {
        console.log(`Number ${secondNumber} is bigger than ${firstNumber}`);
        }
        else
        {
        console.log(`Number ${secondNumber} and ${firstNumber} are even`);
        }
    } else {
        console.log('error');
    }
}

biggerNumber(7, 5);

//different method
/*function biggerNumber();
let firstNumber;
let secondNumber;


biggerNumber(firstNumber, secondNumber) {
    firstNumber = 3;
    secondNumber = 5;

if (firstNumber > secondNumber) {
    console.log(`Number ${firstNumber} is bigger than ${secondNumber}`)
} 

if (firstNumber === secondNumber) {
    console.log(`Both numbers are ${number}`)
}

if (firstNumber === NaN && secondNumber === NaN) {
    console.log(`Error - parameters are not an numbers`);
}

}
*/