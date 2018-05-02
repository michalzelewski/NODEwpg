/*Define a iceCreamFlavors array with 10 flavors
Remove the last 4 elements using pop
Show the iceCreamFlavors items as output
Show each removed flavor*/

const iceCreamFlavors = ['vanilla', 'kivi', 'lime', 'lemon', 'bluebery', 'banana', 'watermelon', 'honeymelon', 'coconut', 'chocolate'];

let chocolate = iceCreamFlavors.pop();
let coconut = iceCreamFlavors.pop();
let honeymelon = iceCreamFlavors.pop();
let watermelon = iceCreamFlavors.pop();

console.log(iceCreamFlavors);
console.log(chocolate, coconut, honeymelon, watermelon);