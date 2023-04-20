'use strict'

// 1) Write a showExperience function 
// that will accept an object with all the data
//  and return a string with experience.
// Example:
// showExperience(personalPlanPeter) => '1 month'
// P.S. it is desirable to use destructuring, but not required

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showExperience(plan) {
const {exp} = plan.skills
return exp.toString()
}







function showProgrammingLangs(plan) {

}