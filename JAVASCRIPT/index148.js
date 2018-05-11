/*Define a superheroe variable and assign a literal object
Create the following properties and values to the superheroe object:
property: name, value: Batman
property: secretName, value: Bruce
property: sidekick, value: ['Robin', 'Alfred', 'Gordon']
property: strength, value: 70
Show each superheroe property as output
Show the superheroe speed property
Now add the speed property to the superheroe object using dynamic property and assing the value 80
Show the superheroe speed property again*/

const superheroe = {
    name: 'Batman',
    secretName: 'Bruce',
    sidekick: ['Robin', 'Alfred', 'Gordon'],
    strength: 70
}

console.log(superheroe);
console.log(superheroe.speed);

superheroe.speed = 80;

console.log(superheroe.speed);