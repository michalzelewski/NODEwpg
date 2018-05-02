/*Define a validateUser function that accepts the following parameters: username and password
This function returns true or false if username and password match any of the following values:
username: nacho, password: Nerd1979
username: pedro, password: Batman0217
username: marta, password: Mother2312
Show the following output if username and password belong to a user: Wellcome %username%, nice to see you again
Show the following output if username and password don't belong to a user: Please input valid credentials
Try calling the validateUser with valid credentials and also with invalid ones*/

let user = 'nacho';
let pass = 'Nerd1979';

function validateUser(username, password) {
    switch (username, password) {
        case ('nacho', 'Nerd1979'):
            return true
            break;
        case ('pedro', 'Batman0217'):
            return true
            break;
        case ('marta', 'Mother2312'):
            return true
            break;
        default:
           return false
      }
}

if (validateUser(user, pass)) {
    console.log(`Wellcome ${user}, nice to see you again`);
} else {
    console.log(`Please input valid credentials`);
}

/* diffrent method

function validateUser(username, password) {
    switch (username, password) {
        case ('nacho', 'Nerd1979'):
        console.log(`Wellcome ${username}, nice to see you again`);
            break;
        case ('pedro', 'Batman0217'):
        console.log(`Wellcome ${username}, nice to see you again`);
            break;
        case ('marta', 'Mother2312'):
        console.log(`Wellcome ${username}, nice to see you again`);
            break;
        default:
        console.log(`Please input valid credentials`);
      }
}

validateUser('pedro', 'Batman0217');*/