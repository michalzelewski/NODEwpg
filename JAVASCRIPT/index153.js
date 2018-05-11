/*Define a arithmetic variable and assing a literal value with the following methods:
    add
    substract
    multiply
    divide
    remainder
Each method accepts 2 numeric parameters and shows the operation result
So, add will add both numbers together and log the result (the rest of the methods work in the same way)
Show an error if the paramters values are not numbers
Call the methods:

add(2, 10)
substract(10, 5)
multiply(3, 100)
divide(40, 2)
remainder(20, 2)*/

const arithmetic = {
    add: function(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number')) {
            console.log(`Error - parameter is not a number`);
        } else {
            return (x + y);
        }
    },
    substract: function(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number')) {
            console.log(`Error - parameter is not a number`);
        } else {
            return (x - y);
        }
    },
    multiply: function(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number')) {
            console.log(`Error - parameter is not a number`);
        } else {
            return (x * y);
        }
    },
    divide: function(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number')) {
            console.log(`Error - parameter is not a number`);
        } else {
            return (x / y);
        }
    },
    remainder: function(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number')) {
            console.log(`Error - parameter is not a number`);
        } else {
            return (x % y);
        }
    }
}

console.log(arithmetic.add(2, 10));
console.log(arithmetic.substract(10, 5));
console.log(arithmetic.multiply(3, 100));
console.log(arithmetic.divide(40, 2));
console.log(arithmetic.remainder(20, 2));