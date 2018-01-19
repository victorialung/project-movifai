// cargando todo el árbol de nodos del DOM
$(document).ready(function() {
// activando barra lateral de peril de usuario
  $('.show-user-perfil').sideNav();
  // activando slider
  $('.carousel.carousel-slider').carousel({fullWidth: true});

  $(document).ready(function() {
    $('input.autocomplete').autocomplete({
      data: {
        'Apple': null,
        'Microsoft': null,
        'Google': null,
        'Gargle': null
      }
    });
  });
  // Función para nav-side
  // Initialize collapse button
  $('.button-collapse').sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  // $('.collapsible').collapsible();
  $('.button-collapse').sideNav({
    menuWidth: 300, // Default is 300
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true,
  }
  );

  var arrNumber = [];
  // Evento para las cajas de home
  $('.col .container-flex').on('click', function() {
    var number = $(this).data('box');
    arrNumber.push(number);
    for (var i = 0; i < arrNumber.length; i++) {
      switch (true) {
      case arrNumber[i] === 0:
        showMovies('recommended');
        break;
      case arrNumber[i] === 1:
        showMovies('short');
        break;
      case arrNumber[i] === 2:
        showMovies('horror');
        break;
      case arrNumber[i] === 3:
        showMovies('classic');
        break;
      case arrNumber[i] === 4:
        showMovies('comedy');
        break;
      case arrNumber[i] === 5 :
        showMovies('drama');
        break;
      case arrNumber[i] === 6:
        showMovies('action');
        break;
      case arrNumber[i] === 7:
        showMovies('animation');
        break;
      }
    }
    window.location.ref = 'search-theme.html';
  });

  // Función para mostrar películas en la siguiente página
  function showMovies(genre) {
    var arrGenre = Object.keys(data);
    for (var i = 0; i < arrGenre.length; i++) {
      if (arrGenre[i] !== genre) {
        // alert('Lo sentimos, la siguiente vista está en construcción.');
      } else {
        var arrMovies = data[arrGenre[i]];
        for (var j = 0; j < arrMovies.length; j++) {
          var objMovie = arrMovies[j];
          localStorage.title = objMovie.Title;
          localStorage.poster = objMovie.Poster;
          localStorage.time = objMovie.Runtime;
          localStorage.year = objMovie.Year;
          localStorage.plot = objMovie.Plot;
          localStorage.actors = objMovie.Actors;
        }
      }
    }
  }
});