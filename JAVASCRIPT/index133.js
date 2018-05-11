/*Define a mutants array with the following values:
    Professor X
    Cyclops
    Iceman
    Angel
    Magneto
    Beast
    Phoenix
    Logan
    Gambit

First part
    Iterate over the mutants items
    Show each mutant name
    Break the execution in case Magneto is part of the mutants list
Second part
    Find out Magneto position and remove it from the mutants array
    Iterate over the array without Magento on it and show each mutant name in upper case 
    and the item position*/

const mutants = ['Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Magneto',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit'
];

// FIRST PART

//mutants.forEach(function(mutantsName) {
    
    /*console.log(mutantsName);
    
    if (mutantsName === 'Magneto') {
        break;
        }
    });*/

for (let i = 0; i < mutants.length; i++) {

    if (mutants[i] === 'Magneto') {
        break;
    }
    console.log(mutants[i]);
}

// SECOND PART
    
console.log(mutants.indexOf('Magneto'));
mutants.splice(mutants.indexOf('Magneto'), 1); // Magneto has been removed
console.log(mutants);

mutants.forEach(function(mutantsNewArray, index) {
    console.log(mutantsNewArray.toUpperCase(), index);
});