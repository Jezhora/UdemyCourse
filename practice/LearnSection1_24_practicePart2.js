const numberOfFilms = +prompt('How many films have you wached?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


for (let i = 0; i < 2; i++) {
    const questionOne = prompt('One of the last movies you watched?', ''),
          questiontwo = prompt('How do you rate it?', '');
    
    if (questionOne != null && questiontwo != null && questionOne != '' 
                    && questiontwo != '' && questionOne.length < 50 ) {

        personalMovieDB.movies[questionOne] = questiontwo;
    } else {
        i--;
    }     
}

if (personalMovieDB.count >= 1 && personalMovieDB.count < 10) {
    console.log('few movies watched')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
    console.log('you are a good viewer')
} else if (personalMovieDB.count >= 30) {
    console.log ('you are a movie buff!')
} else {
    console.log('ERROR')
}


console.log(personalMovieDB)