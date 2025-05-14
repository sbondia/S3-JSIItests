const movies = require("./data")

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
	const arrDirectors = []
	array.map(movie=> arrDirectors.push(movie.director))
	return arrDirectors
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
	const arrmoviesFromDirector = []
	array.map(movie=>{
		if(movie.director==director) {arrmoviesFromDirector.push(movie)}
	})
	return arrmoviesFromDirector
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
	let averageOfDirector = 0
	let movieCounter = 0
	getMoviesFromDirector(array, director).map(movie=>{
		averageOfDirector+=movie.score
		movieCounter++
	})
	return averageOfDirector/movieCounter
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
	const arrTitles = array.map(movie=> movie.title)
	arrTitles.sort()
	arrTitles.splice(20)
	return arrTitles
}

// Exercise 5: Order by year, ascending
function orderByYear(array){
	const arrSorted = array.toSorted((movieA, movieB)=>(movieA.year==movieB.year) ? (movieA.title).localeCompare(movieB.title) : movieA.year-movieB.year)
	return arrSorted
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, cat) {
	let average = 0
	let movieCounter = 0
	array.map(movie=> {
		movie.genre.map(gen=> {if(gen==cat) {average+=movie.score; movieCounter++}})
	})
	return average/movieCounter
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
	const arrayHTM = JSON.parse(JSON.stringify(array))
	arrayHTM.map(movie=>{
		movie.duration = movie.duration.replace('h','').replace('min','')
		if(!isNaN(movie.duration)) {movie.duration = parseInt(movie.duration)*60}
		else{
			const arrayAux = movie.duration.split(' ')
			movie.duration = parseInt(arrayAux[0])*60+parseInt(arrayAux[1])
		}
	})
	return arrayHTM
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
