/*Define a mutants array with the following values:

Professor X
Cyclops
Iceman
Angel
Beast
Phoenix
Logan

Show the following message only if Logan and Professor X are mutants items:
    We love X-Men
Show the following message only if Gambit is not a mutants items:
    X-Men sucks*/

const mutants = ['Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Beast',
    'Phoenix',
    'Logan'];

mutants.indexOf('Professor X');
mutants.indexOf('Logan');

if (mutants.indexOf('Professor X') > -1 && mutants.indexOf('Logan') > -1) {
    console.log('We love X-Men');
  }

mutants.indexOf('Gambit');

if (mutants.indexOf('Gambit') > -1) {
    console.log('We love X-Men');
} else {
    console.log('X-Men sucks');
}