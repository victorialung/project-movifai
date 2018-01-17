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

var text = $('#titleFld').val();
console.log(text);
function apiCall() {
  var movieArray = [];
  // var randomNumber = Math.floor((Math.random() * movieArray.length - 1) + 1);
  
  var randomMovie = movieArray[randomNumber];
  console.log(randomMovie);
  $.getJSON('https://www.omdbapi.com/?t=' + encodeURI(randomMovie) + '&apikey=3a181f1c').then(function (response) {
    console.log(response.Poster);
    var image = response.Poster;
    console.log(image);
    if (image !== 'N/A') {
      $('#movie').append('<img src="' + image + '">');
    }
  });
}
$('#searchBtn').on('click', function () {
  apiCall();
});