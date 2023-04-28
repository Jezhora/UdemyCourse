const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Zlatan'];;

function sortStudentsByGroups(arr) {
    let allStudentsGroups = [];
    const studentsSort = arr.sort()

    for (let i = 0; i < arr.length; i += 3) {
        
        let divide = studentsSort.slice(i, i + 3)
        
        allStudentsGroups.push(divide)
    }

    if (allStudentsGroups.length % 3 === 0) {
         allStudentsGroups.push('Remaining students:-')
    } else {
        let remainingStudents = '';
        allStudentsGroups.forEach((student, ind) => {
            if (student.length < 3) {
                allStudentsGroups.splice(ind)
                remainingStudents = student.join(', ')
            }
        })
        allStudentsGroups.push(`Remaining students: ${remainingStudents}`)
    }

    return allStudentsGroups
}
console.log(sortStudentsByGroups(students));

// In this task, we will already complicate the work with objects and arrays.
// It is optional and here you can try your hand.
// Please note that code verification in such tasks is carried out automatically,
// through the program. Therefore, you must strictly follow the instructions.
// You can first decide in your code editor, and then paste it here.
// Task:
// You have a list of students who want to play the game:
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// But teams can only be 3 to 3 people. Write a sortStudentsByGroups function that accepts an array of strings.
// Inside, it first sorts the names alphabetically. Then distributes students of 3 people into 3 groups in alphabetical order. These groups must be arrays. As a result, the function returns a new array with three commands and a string as the 4th element.
// Example:

// sortStudentsByGroups(students) =>

// [
//    [ 'Andrew', 'Ann', 'Bernard' ],
//    [ 'Cris', 'Josh', 'Mark' ],
//    [ 'Peter', 'Sam', 'Sandra' ],
//    'Remaining Students: Takesi'
// ]
// If you remove one student from the list, the result will be:

// [
//    [ 'Andrew', 'Ann', 'Bernard' ],
//    [ 'Cris', 'Josh', 'Mark' ],
//    [ 'Peter', 'Sam', 'Sandra' ],
//    'Remaining students: -'
// ]
// And if you add one, then:

// [
//    [ 'Andrew', 'Ann', 'Bernard' ],
//    [ 'Cris', 'Josh', 'Mark' ],
//    [ 'Peter', 'Sam', 'Sandra' ],
//    'Remaining students: Takesi, Somebody'
// ]
// That is, the contents of the line are changed. All remaining students go there.
