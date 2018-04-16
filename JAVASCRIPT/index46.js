const userAndPassword = 'pepito2017, 12345';
const username = userAndPassword.substr(0, 10); // first method
const password = userAndPassword.substr(12, userAndPassword.length); // second method

console.log(`The user ${username} has ${password} as password`);