/*Define a function named showUser that will output the following data:
Your name
Your age
Your phone number
Your street
Your postal code
If you're married or not (boolean)*/

function showUser() {
    let name = 'Michal';
    let age = 30;
    let phone = 204891;
    let street = 'Poratge';
    let postal = 'R3J';
    let married = true;

    console.log(`name: ${name}\n age: ${age}\n phone: ${phone}\n street: ${street}\n postal: ${postal}\n married: ${married} ` + typeof married);
}

showUser();