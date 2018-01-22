$(document).ready(function () {

  // $('<img class="responsive-img" src="' + localStorage.foto + '">').appendTo('#btn-nav');
  // Muestra datos del usuario
  $('#btn-nav').on('click', function () {
    var user = firebase.auth().currentUser;
    $('#user-avatar').attr('src', user.photoURL);
    $('#name-user').text(localStorage.name);
  })

  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  $('.button-collapse').sideNav({
    menuWidth: 300, // Default is 300
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true,
  });

  // Debe mostrar todos los usuarios


  // Evento para el input

  // Evento para botón seguir
  $('#btn-follow').on('click', function() {
    $(this).
    if ($(this).hasClass('btn')) {
      $(this).addClass('btn-follow');
      $(this).text('siguiendo');
    } else {
      $(this).addClass('btn');
      $(this).text('seguir');
    }
  });

});