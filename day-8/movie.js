class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

function getPG(movies) {
  return movies.filter((movie) => movie.rating === "PG");
}

const movie = new Movie("Casino Royale", "Eon Productions", "PG13");
