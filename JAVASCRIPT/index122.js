/*Define a ingredients array and assign the following values:
    Pork
    Pomato
    Chicken
    Lettuce
    Beef
    Carrots
    Cucumber
Define a new array with the name vegetarian and assign only the items from
the ingridient array (using indexes) that should belong in the vegetarian list
Show the ingredients list as output
Show the vegetarian list as output
Now I'm hungry!*/

const ingredients = ['Pork',
    'Pomato',
    'Chicken',
    'Lettuce',
    'Beef',
    'Carrots',
    'Cucumber'];

console.log(ingredients); // show all

console.log(ingredients[1], ingredients[3], ingredients[5], ingredients[6],); // check vegie

const vegetarian = [];

vegetarian[0] = ingredients[1];
vegetarian[1] = ingredients[3];
vegetarian[2] = ingredients[5];
vegetarian[3] = ingredients[6];

console.log(vegetarian); // show vegie