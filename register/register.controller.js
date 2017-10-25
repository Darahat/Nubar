  var config = {
    apiKey: "give your's",
    authDomain: "fir-project-7d60d.firebaseapp.com",
    databaseURL: "https://fir-project-7d60d.firebaseio.com",
    projectId: "fir-project-7d60d",
    storageBucket: "fir-project-7d60d.appspot.com",
    messagingSenderId: "give your's"
  };
  firebase.initializeApp(config);



 

function show(elementID) {
    var ele = document.getElementById(elementID);
    if (!ele) {
        alert("no such element");
        return;
    }
    var pages = document.getElementsByClassName('container');
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    ele.style.display = 'block';
}

const txtEmail=document.getElementById('txtEmail');
const txtPassword=document.getElementById('txtPassword'); 
const btnSignUp=document.getElementById('btnSignUp');

// const gend=document.getElementById('gender');
const uname=document.getElementById('txtusername');  
// const bdate=document.getElementById('bddate');
const propicurl=document.getElementById('uploadprofilepic');
  
 
btnSignUp.addEventListener('click',e =>{
  //get email and password
  
  const email=txtEmail.value;
  const pass=txtPassword.value; 
 
  // const color=
  const auth=firebase.auth();
  
  //Sign in
  const promise=auth.createUserWithEmailAndPassword(email,pass).then(function(){
  const username=uname.value;
   var user = firebase.auth().currentUser;
  const userId = user.uid;

  firebase.database().ref('users/user/profileinfo/' + userId).set({
    name: uname.value,
    email: txtEmail.value,
    UID:user.uid,
       });     

   console.log("Successfully Signup");
  document.getElementById("btnSignUp").style.visibility="hidden";
  document.getElementById("back").innerHTML="Lets Go";
  
  alert("Signup Successfull!!");
 
   //  window.location.assign("../personalize/personalize.view.html"); //After successful login, user will be redirected to home.html
   // console.log(user.txtEmail);

  })

  .catch(function(error){
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(error);
  if (errorCode == 'auth/weak-password') {
    document.getElementById('error-messages').innerHTML='The password is too weak.';
  } else {
    document.getElementById('email-error-messages').innerHTML=errorMessage;

  }
  
   console.log(e);
  
  });
  
});

 
