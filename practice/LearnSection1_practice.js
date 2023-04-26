'use strict';





const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('How many films have you wached?', '');
    
            while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt('How many films have you wached?')
            }
    
    },
    rememberMyFilms: function  () {
        for (let i = 0; i < 2; i++) {
            const questionOne = prompt('One of the last movies you watched?', '').trim(),
                  questiontwo = prompt('How do you rate it?', '');
            
            if (questionOne != null && questiontwo != null && questionOne != '' 
                            && questiontwo != '' && questionOne.length < 50 ) {
        
                personalMovieDB.movies[questionOne] = questiontwo;
            } else {
                i--;
            }     
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count >= 1 && personalMovieDB.count < 10) {
            console.log('few movies watched')
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
            console.log('you are a good viewer')
        } else if (personalMovieDB.count >= 30) {
            console.log ('you are a movie buff!')
        } else {
            console.log('ERROR')
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for(let i = 1; i <= 3; i++){
            personalMovieDB.genres[i - 1] = prompt(`Your favorite genre number ${i}`);;
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
    
}



