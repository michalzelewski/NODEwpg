/*Define a mutants array with the following values:

Professor X
Cyclops
Iceman
Angel
Beast
Phoenix

Sort the list
Revert the sorted list
Join all mutants name using the following text: '* '
Show the following output:
    Original mutants list
    Sorted mutants list
    Reversed mutants list
    Mutants name separated by *  */

const mutants = ['Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Beast',
    'Phoenix'];

console.log(mutants); //original list

const mutantsSort = mutants.sort();
console.log(mutantsSort); // sorted list

const mutantsReverse = mutants.reverse();
console.log(mutantsReverse); // reversed list

const joinedMutantsByStar = mutants.join(' * ');
console.log(joinedMutantsByStar); // names separated by *