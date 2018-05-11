/*Define a femaleStudents array and assign 5 students
Define a maleStudents array and assign 5 students
Define a students array and assign all students name using the femaleStudents and maleStudents arrays
Sort the students list
Show the following output:
    Each femaleStudents name using numeric indexes
    Each maleStudents name using while
    Each students name using for*/

const femaleStudents = ['Martyna', 'Mia', 'Paris', 'Sydney', 'Canmore'];
const maleStudents = ['Michal', 'Mike', 'Nico', 'Pablo', 'Abc'];
const students = femaleStudents.concat(maleStudents);

const studentsSortedList = students.sort();
console.log(studentsSortedList);

// result Each femaleStudents name using 'numeric indexes'
console.log(studentsSortedList[1], studentsSortedList[2], studentsSortedList[3], studentsSortedList[8], studentsSortedList[9]);

// result Each maleStudents name using 'while'
let i = 0;

while (i < maleStudents.length) {
    console.log(maleStudents[i]);
    i++;
}

// result Each students name using 'for'
for (let i = 0; i < studentsSortedList.length; i++) {
    console.log(studentsSortedList[i]);
}