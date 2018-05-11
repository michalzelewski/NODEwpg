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
Filter the list using the filter method and remove the following mutants:
    Magneto
    Iceman
    Gambit
Show the filtered list as output*/

const mutants = ['Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Magneto',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit'];

const newMutantsList = mutants.filter(function(mutant) {
    if (mutant === 'Magneto') {
        return false;
    }
    if (mutant === 'Iceman') {
        return false;
    }
    if (mutant === 'Gambit') {
        return false;
    } else {
       return true;
    }
});

console.log(newMutantsList);