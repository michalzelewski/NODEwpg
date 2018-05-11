/*Define a jeep variable and assign a literal object
Add the object a brand property and assing the following string value: Jeep Wrangler
Add the object a price property and assing the following numeric value: 34000
Show the following message as output using object dynamic properties
(use variables or string literals)
    The %brand% is $ %price%*/

let brand = 'brand';
let price = 'price';

const jeep = {
    brand: 'Jeep Wrangler',
    price: 34000
} 

console.log(`The ${jeep[brand]} is $ ${jeep[price]}`);

// string literals has been used

const jeepB = {
    brandB: 'Jeep Wrangler',
    priceB: 34000
}

console.log('The ' + jeepB['brandB'] + ' is $ ' + jeepB['priceB']);