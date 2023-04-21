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
return exp;
}


// 2)Write the showProgrammingLangs function, which will accept an object 
// with all the data and return a string in the required form.
// Example:
// showProgrammingLangs(personalPlanPeter) =>
// "Js is 20% learned PHP is 10% learned"
// Moreover, the function should work regardless of the number of languages.
//  If none is specified, then an empty string is returned.

// Line breaks use \n at the end of the line.


function showProgrammingLangs(plan) {
const lang = plan.skills.programmingLangs

let answ = ''
    if(Object.keys(lang).length === 0) {
        return answ
    } else {
        for (let key in lang) {
            answ += `Язык ${key} изучен на ${lang[k]}\n`
        }    
    }
    return answ
}

console.log(showProgrammingLangs(personalPlanPeter));
