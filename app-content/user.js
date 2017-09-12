function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("mySidenav2").style.width = "0";
}

function openNav2() {
    document.getElementById("mySidenav2").style.width = "100%";
    document.getElementById("mySidenav").style.width = "0";
}


function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
   document.getElementById("mySidenav2").style.width = "0";
}
 


$(document).ready(function(){
  $("#chatcolor-dropdown").click(function(){
    $("#chatcolor-dropdown-content").slideToggle("fast");
     
  })
})



var user = firebase.auth().currentUser ;
var userref = firebase.database().ref("users/user/");

