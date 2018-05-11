/*Copy and paste the code from the previous exercise
Refactor the code to match the requirements
The shouldOpenBatCave function not longer accepts two parameters
Now the shouldOpenBatCave function only accepts a user parameter
Instead of calling the shouldOpenBatCave function passing username and passowrd 
now we only pass the user object
The rest of the code should still work the same way and show the proper output*/

const user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!'
};

function shouldOpenBatCave(user) {
    
    user.password = 'Alfred1960KPO!';
    
    if (user.username === 'batman' && user.password === 'Alfred1960KPO!') {
        return true;
    } else {
        return false;
    }
}

console.log(shouldOpenBatCave(user));

if (shouldOpenBatCave(user)) {
    console.log('Welcome back batman!!');
} else {
    console.log("Sorry, you can't enter the Batcave, try again..");
}