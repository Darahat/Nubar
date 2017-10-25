  // var config = {
  //   apiKey: " give your's",
  //   authDomain: "give your's",
  //   databaseURL: "give your's",
  //   projectId: "give your's",
  //   storageBucket: "give your's",
  //   messagingSenderId: "give your's"
  // };
  // firebase.initializeApp(config);



$(document).ready(function(){
  $("#chatcolor-dropdown").click(function(){
    $("#chatcolor-dropdown-content").slideToggle("fast");
     
  });
});

function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();            
            reader.onload = function (e) {
                $('#proimg').attr('src', e.target.result);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    $("#uploadprofilepic").change(function(){
        readURL(this);
    });

var fileButton=document.getElementById('uploadprofilepic');
var storageRef=firebase.storage().ref();
fileButton.addEventListener('change',function(e){
  var file=e.target.files[0];
  
var task=storageRef.child('profilepic/'+ file.name).put(file);



task.on('state_changed',
  function(snapshot){

},function(err){},function(){
  var downloadURL=task.snapshot.downloadURL;
console.log(downloadURL);
// download(downloadURL);
var img=document.getElementById('proimg');
// img.src=downloadURL;
var user = firebase.auth().currentUser ;
var userref = firebase.database().ref("users/user/");

userref.child('profilepic/').set({
   profilepic:downloadURL,
   email:user.email,
});
});

});

