/*Define a user variable and assign a literal objecto as value
This user will have your personal data
Add at least 10 properties and values to describe you
Try using the following type values as properties values: string, number, boolean, array & object (yes, you can assign a literal object as property too)

Define at least 5 properties when we initialize the user object:
    const myObject = {
    property: value,
    property: value,
    }
Define the rest of the user properties using the dynamice way
    const myObject = {
    property: value,
    property: value,
    }

    myObject.newProperty = value;
    myObject.newProperty = value;
    myObject.newProperty = value;
Show the user object as output*/

const user = {
    name: 'michal',
    lastName: 'zelewski',
    age: 30,
    realAge: 20,
    married: true,
    canadian: true,
}

    user.polish = true;
    user.unemployed = false;
    user.kids = {
        name: 'none'
    };
    user.loveJavaScript = true;
    user.howManyFingersToCode = [10, 10];

console.log(user);