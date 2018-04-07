let name = 'Winnipeg';
let localization = 'Manitoba, Canada';
let population = 600000;
let mostPopularIsHockey = true;
let winterIsNotCold = false;
let workLifeBalance = null;
let everyoneLoveWinnipeg = undefined;
let template = `${name} is the city in ${localization}. Population is above ${population}. 
It is ${mostPopularIsHockey} that hockey is most pupular sport in city as well as it's ${winterIsNotCold}
that winter is not cold here. If you will ask me if everyone love ${name} I need to say it's ${everyoneLoveWinnipeg}`

console.log(template);
console.log('name of city:', name);
console.log('localization:', localization);
console.log('population:', population);
console.log('most popular is hockey:', mostPopularIsHockey);
console.log('winter is not cold:', winterIsNotCold);
console.log('work-life balance:', workLifeBalance);
console.log('everyone love WPG:', everyoneLoveWinnipeg);

console.log(typeof name); // string
console.log(typeof localization); // string
console.log(typeof population); // number
console.log(typeof mostPopularIsHockey); //boolean
console.log(typeof winterIsNotCold); // boolean
console.log(typeof workLifeBalance); // object
console.log(typeof everyoneLoveWinnipeg); //undefined