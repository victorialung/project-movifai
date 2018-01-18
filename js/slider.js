// Inicializamos el document
$(document).ready(function(){
  $('.slider').slider();

 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyCGfSH5EIJH4SCCU-9M0hksIwIjVQ5LrNk",
  authDomain: "movifai-b94a2.firebaseapp.com",
  databaseURL: "https://movifai-b94a2.firebaseio.com",
  projectId: "movifai-b94a2",
  storageBucket: "movifai-b94a2.appspot.com",
  messagingSenderId: "15279201412"
};
firebase.initializeApp(config);
// Indicamos que google sera el proveedor 
var provider = new firebase.auth.GoogleAuthProvider();

// Pop up autenthication 
$('#btn-login').click(
  function signUp() {
    firebase.auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // window.location.href = 'register.html';
        console.log(result.user.displayName);
        console.log(result.user.photoURL);
        window.location.href = 'home.html';
      })
  });

});