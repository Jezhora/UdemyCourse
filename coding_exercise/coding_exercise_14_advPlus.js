const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Zlatan'];;

function sortStudentsByGroups(arr) {
    let allStudentsGroups = [];
    const studentsSort = arr.sort()

    for (let i = 0; i < arr.length; i += 3) {
        
        let divide = studentsSort.slice(i, i + 3)
        
        allStudentsGroups.push(divide)
    }

    if (allStudentsGroups.length % 3 === 0) {
         allStudentsGroups.push('Оставшиеся студенты: -')
    } else {
        let remainingStudents = '';
        allStudentsGroups.forEach((student, ind) => {
            if (student.length < 3) {
                allStudentsGroups.splice(ind)
                remainingStudents = student
            }
        })
        allStudentsGroups.push(`Оставшиеся студенты: ${remainingStudents.join(', ')}`)
    }

    return allStudentsGroups
}
console.log(sortStudentsByGroups(students));

