/*Define a iceCreamFlavors array with 10 flavors
Remove the first 2 elements using shift
Show the iceCreamFlavors items as output
Show each removed flavor*/

const iceCreamFlavors = ['vanilla', 'kivi', 'lime', 'lemon', 'bluebery', 'banana', 'watermelon', 'honeymelon', 'coconut', 'chocolate'];
let iceCreamFlavorsRemoved1 = iceCreamFlavors.shift(iceCreamFlavors[0]);
let iceCreamFlavorsRemoved2 = iceCreamFlavors.shift(iceCreamFlavors[0]);

console.log(iceCreamFlavors);
console.log(iceCreamFlavorsRemoved1, iceCreamFlavorsRemoved2);