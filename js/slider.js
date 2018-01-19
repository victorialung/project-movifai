// Inicializamos el document
$(document).ready(function(){
  $('.slider').slider();
  
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAEq19iFWUKTSHBQ8J4q-tFx-a3AXjg4dg",
    authDomain: "movifai-e47d0.firebaseapp.com",
    databaseURL: "https://movifai-e47d0.firebaseio.com",
    projectId: "movifai-e47d0",
    storageBucket: "movifai-e47d0.appspot.com",
    messagingSenderId: "11379636808"
  };
  firebase.initializeApp(config);
// Indicamos que google sera el proveedor 
var provider = new firebase.auth.GoogleAuthProvider();

// Función para guardar automáticamente
  function save(user) {
    var usuario = {
      uid: user.uid,
      username: user.displayName,
      usermail: user.email,
      userphoto: user.photoURL
    };
    firebase.database().ref('speakup/' + user.uid).set(usuario);
  };

  // Evento para el botón Inicia sesión
  $('#btn-login').on('click', function() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      save(result.user);
      // Guardando en el localstorage
      window.localStorage.setItem('name', result.user.displayName);
      var name = window.localStorage.getItem('name');
      window.localStorage.setItem('foto', result.user.photoURL);
      var photo = window.localStorage.getItem('foto');
    });
  });
});