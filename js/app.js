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
function apiCall(movie) {
  // $.getJSON('http://www.omdbapi.com/?apikey=3a181f1c&s=' + movie).then(function(response) {
  $.getJSON('https://www.omdbapi.com/?t=' + movie + '&apikey=3a181f1c').then(function(response) {
    console.log(response);
    var title = response.Title;
    var image = response.Poster;
    if (title !== 'N/A') {
      $('#movie').append('<p>' + title + '</p>');
      $('#movie').append('<img src=' + image + '>');
    }
  });
}
$('#searchBtn').on('click', function() {
  var text = $('#titleFld').val();
  apiCall(text);
});
