/*Define the following array:
const data = [42, true, function() {return 'The meaning of life is: '}];
If the second item from data is true then show the following output using the first and 
last items from the data array: The meaning of life is: 42*/

const data = [42, true, function() {return 'The meaning of life is: '}];
    
const number = data[0];
const trueOrFalse = data[1];
const context= data[2];

if (data[1]) {
        console.log(context() + number);
    }