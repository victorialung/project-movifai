var title, poster, plot, actors, runtime, year;

function showMovies(genre) {
  var arrGenre = Object.keys(data);
  for (var i = 0; i < arrGenre.length; i++) {
    if (arrGenre[i] !== genre) {
      alert('El género no existe');
    } else {
      var arrMovies = data[arrGenre[i]];
      for (var j = 0; j < arrMovies.length; j++) {
        var objMovie = arrMovies[j];

        title = objMovie.Title;
        poster = objMovie.Poster;
        time = objMovie.Runtime;
        year = objMovie.Year;
        plot = objMovie.Plot;
        actors = objMovie.Actors;

        console.log(title + ' / ' + time);
      }
    }
  }
}

$('.overlay').on('click', function() {
  showMovies('drama');
});
