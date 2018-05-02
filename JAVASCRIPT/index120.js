/*Define a students variable and assign an empty array
Assing students values in the following indexes: 0, 1, 2, 3, 4 and 5
Show the index number and value as otput:
index 0: Marta*/

const students = [];

students[0] = 'Marta';
students[1] = 'Nico';
students[2] = 'Mia';
students[3] = 'Pablo';
students[4] = 'Michal';
students[5] = 'Martyna';

// checking index

for (let index = 0; index < 5; index++) {
   console.log(`index ${index}, ${students[index]}`);
}