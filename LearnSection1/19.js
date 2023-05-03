const numberOfFilms = +prompt('How many films have you wached?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const questionOne = prompt('One of the last movies you watched?', ''),
      questiontwo = prompt('How do you rate it?', ''),
      questionOneA = prompt('One of the last movies you watched?', ''),
      questiontwoB = prompt('How do you rate it?', '');


personalMovieDB.movies[questionOne] = questiontwo;
personalMovieDB.movies[questionOneA] = questiontwoB;
console.log(personalMovieDB)