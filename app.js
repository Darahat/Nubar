
// (function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCtzPNSpAe4j-kOAs3l2DPaFA9MKYs2WE8",
    authDomain: "fir-project-7d60d.firebaseapp.com",
    databaseURL: "https://fir-project-7d60d.firebaseio.com",
    projectId: "fir-project-7d60d",
    storageBucket: "fir-project-7d60d.appspot.com",
    messagingSenderId: "626154445141"
  };
  firebase.initializeApp(config);


var provider=new firebase.auth.FacebookAuthProvider();
function loginFaceBook(){
firebase.auth().signInWithPopup(provider)
.then(function(result){
  var token=result.credential.accessToken;
  var user=result.user;
  console.log(token);
  console.log(user);
  //window.location.assign("home/home.view.html");
}).catch(function(error){
  console.log(error.code);
  console.log(error.message);

});
}

$(document).ready(function(){
  $("#MailLogin").click(function(){
    $("#dropdown-content").slideToggle("fast");
  })
})

const txtEmail=document.getElementById('txtEmail');
const txtPassword=document.getElementById('txtPassword');
const btnLogin=document.getElementById('btnLogin');
const btnSignUp=document.getElementById('btnSignUp');
const btnLogout=document.getElementById('btnLogout');


btnLogin.addEventListener('click',e =>{
  //get email and password
  const email=txtEmail.value;
  const pass=txtPassword.value; 
  const auth=firebase.auth();
  //Sign in

  const promise=auth.signInWithEmailAndPassword(email,pass).catch(function(error){
  // promise.catch(e =>console.log(e.message));
  var errorCode=error.code;
  var errorMessage=error.message;
  document.getElementById('error-messages').innerHTML=errorMessage;
});
});



firebase.auth().onAuthStateChanged(user => {
  if(user) {
    window.location.assign("home/home.view.html"); //After successful login, user will be redirected to home.html
   console.log(user.txtEmail);
   document.getElementById("btnLogin").style.visibility="hidden";
   document.getElementById("load").style.visibility="visible";
   // document.body.style.opacity=".8";
     document.getElementById("gif").style.visibility = "visible";
   // var $image = $("gif").first();
  }
  else{
    console.log('not logged in');
  }
});

 //  $("btnLogin").click(function(){
 // setTimeout(function () {
 //                  
 //               }, 2000);
 //  });

 