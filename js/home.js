// cargando todo el árbol de nodos del DOM
$(document).ready(function() {
// activando barra lateral de peril de usuario
  $('.show-user-perfil').sideNav();
// activando slider
  $('.carousel.carousel-slider').carousel({fullWidth: true});
// Cambiamos los datos por default por los datos del usuario
$('#btn-nav').on('click', function(){
  var user = firebase.auth().currentUser;
  $('#user-avatar').attr('src', user.photoURL);
  $('#name-user').text(user.displayName);
})


  //Función para
$(document).ready(function () {
  $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": null,
      "Gargle": null
    }
  });
});
// Función para nav-side
// Initialize collapse button
$(".button-collapse").sideNav();
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();
$('.button-collapse').sideNav({
  menuWidth: 300, // Default is 300
  edge: 'right', // Choose the horizontal origin
  closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  draggable: true,
}
);

});