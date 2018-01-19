// (function () {
//   jQuery(init);

//   function init() {
//     var searchBtn = jQuery('#searchBtn');
//     var titleFld = jQuery('#title');

//     searchBtn.click(searchMovie);

//     function searchMovie() {
//       var titleText = titleFld.val();
//       alert('clickeaste' + titleText);
//       var url = "http://www.omdbapi.com/?apikey=[apikey]&" + titleText;
//       console.log(url);
//       jQuery.ajax({
//         url: url,
//         success: renderMovies,
//         error: renderError
//       });
//     }

//     function renderMovies() {
//       console.log(response);
//       var movies = response.Search;
//       for (var m in movies) {
//         var movie = movies[m];
//         var title = movie.Title;
//         var imdbID = movie.imdbID;
//         var poster = movie.Poster
//       }
//     };

//     function renderError() {
//       console.error(error);
//     }
//   }
// }) ();


// PRIMER VIDEO
// var randomMovieArray = ['Star Wars', 'Game of Thrones', 'Lord of the Rings', 'Harry Potter'];
// function apiCall() {
//   var randomNumber = Math.floor((Math.random() * randomMovieArray.length - 1) + 1);
//   var randomMovie = randomMovieArray[randomNumber];
//   console.log(randomMovie);
//   $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(randomMovie) + '&apikey=3a181f1c').then(function (response) {
//     console.log(response.Title);
//     var title = response.Title;
//     console.log(title);
//     if (title !== 'N/A') {
//       $('#movie').append('<p>' + title + '</p>');
//     }
//   });
// }
// $('#searchBtn').on('click', function () {
//   apiCall();
// });

// TERCER VIDEO https://www.youtube.com/watch?v=YsPqjYGauns > http://www.omdbapi.com/?apikey=3a181f1c&s='+searchtext'
// function apiCall(movie) {
//   // $.getJSON('http://www.omdbapi.com/?apikey=3a181f1c&s=' + movie).then(function(response) {
//   $.getJSON('https://www.omdbapi.com/?t=' + movie + '&apikey=3a181f1c').then(function(response) {
//     console.log(response);
//     var title = response.Title;
//     var image = response.Poster;
//     genre = response.Genre;
//     plot = response.Plot;

//     var arrGenres = genre.split(', ');
//     console.log(arrGenres);

//     for (var i = 0; i < arrGenres.length; i++) {
//       if (arrGenres[i] === 'Comedy') {
//         console.log('Es comedia');
//       } else if (arrGenres[i] === 'Drama') {
//         console.log('Es drama');
//       } else if (arrGenres[i] === 'Action') {
//         console.log('Es acción');
//       }
//     }
    
//     if (title !== 'N/A') {
//       // $('#movie').append('<div class="container-movgenie"/>');
//       $('.container-genre').append('<p>' + title + '</p>');
//       $('#movie').append($('.container-genre'));
//       // $('#movie').append('<img src=' + image + '>');
//     }
//   });
// }
// $('#searchBtn').on('click', function() {
//   var text = $('#titleFld').val();
//   apiCall(text);
// });

// // Declaración de variables
// var genre, plot, actors, runtime, year, idmbRating;

// CUARTO VIDEO
// $(document).ready(() => {
//   $('#searchForm').on('submit', (e) => {
//     let searchText = $('#searchText').val();
//     getMovies(searchText);
//     e.preventDefault();
//   });
  
//   function getMovies(searchText) {
//     axios.get('http://www.omdbapi.com?apikey=3a181f1c&s=' + searchText).then((response) => {
//       console.log(response);
//       let movies = response.data.Search;
//       let output = '';
//       $.each(movies, (index, movie) => {
//         output += `
//           <div class="col m3">
//             <div class="">
//               <p>${movie.Title}</p>
//               <img src="${movie.Poster}" class="responsive-img">
//               <a onclick="movieSelected('${movie.imdbID}')" class="btn" href="#">See more...</a>
//             </div>
//           </div>
//         `;
//       });
//       $('#movies').html(output);
//     })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   function movieSelected(id) {
//     sessionStorage.setItem('movieId', id);
//     alert('seleccionaste una peli');
//   }

//   function getMovie() {
//     let movieId = sessionStorage.getItem('moveId');
//     axios.get('http://www.omdbapi.com?apikey=3a181f1c&i=' + searchText).then((response) => {
//       console.log(response);
//       let movie = response.data;
//       let output = `
//         <div class="row">
//           <div class="col m4">
//             <img src="${movie.Poster}" class="thumbnail">
//           </div>
//         </div>
//         <div class="col m8">
//             <h2>${movie.Title}</h2>
//             <ul class="list-group">
//               <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
//               <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
//               <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
//               <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
//               <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
//               <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
//               <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
//             </ul>
//         </div>
//         <div class="row">
//           <div class="well">
//             <h3>Plot</h3>
//             ${movie.Plot}
//             <hr>
//             <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
//             <a href="index.html" class="btn btn-default">Go Back To Search</a>
//           </div>
//         </div>
//       `;
//       $('#movie').html(output);
//     });
//   }
// });

$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
  var $search = $('#input-search');
});

var arrDrama = ['Black Mirror', 'La forma del agua', 'El gran showman', 'Vikingos', 'Stranger Things'];

function getMovies(searchText) {
  axios.get('http://www.omdbapi.com/?apikey=14bb2d01&s=' + searchText)
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let output = '';
      genre = response.Genre;

      $.each(movies, (index, movie) => {
        output += `
          <div class="col m3">
            <div class="well text-center">
              <img src="${movie.Poster}">
              <h5>${movie.Title}</h5>
              <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
            </div>
          </div>
        `;
      });

      $('#movies').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

function movieSelected(id) {
  sessionStorage.setItem('movieId', id);
  window.location = 'views/movie.html';
  return false;
}

function getMovie() {
  let movieId = sessionStorage.getItem('movieId');

  axios.get('http://www.omdbapi.com/?apikey=14bb2d01&i=' + movieId)
    .then((response) => {
      console.log(response);
      let movie = response.data;

      let output = `
        <div class="row">
          <div class="col-md-4">
            <img src="${movie.Poster}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2>${movie.Title}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
              <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
              <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
              <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
              <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
              <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
              <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Plot</h3>
            ${movie.Plot}
            <hr>
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
            <a href="index.html" class="btn btn-default">Go Back To Search</a>
          </div>
        </div>
      `;

      $('#movie').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}
