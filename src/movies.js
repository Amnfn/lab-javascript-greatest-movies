// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let allDirectors = moviesArray.map(element => element.director);
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(filterSteven) {
    return filterSteven.filter(element => element.director === 'Steven Spielberg' && element.genre.includes('Drama')).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0;
    }
    let scoreSum = moviesArray.reduce((total, currrent) => {
        if (currrent.score) {
            return total + currrent.score;
        } else {
            return total;
        }
    }, 0)
    let result = scoreSum/moviesArray.length;
    return Number(result.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let drama = moviesArray.filter((movie) => movie.genre.includes("Drama"));
    return scoresAverage(drama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return [...moviesArray].sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray
        .map((movie) => movie.title)
        .sort()
        .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let moviesMinute = JSON.parse(JSON.stringify(moviesArray))

    moviesMinute.map((element) => {
        let timeHours = element.duration;
        let timeHoursArray = timeHours.split(' ');
        let hours = Number(timeHoursArray[0].slice(0, -1));
        let minutes = 0;
        if (timeHoursArray.length > 1) {
            minutes = Number(timeHoursArray[1].slice(0, -3));
        }
        let timeMinutes = hours * 60 + minutes;
        element.duration = timeMinutes;
        return element;
    })
    return moviesMinute;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
