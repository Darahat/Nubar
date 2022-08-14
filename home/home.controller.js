

// importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase-messaging.js');
// importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase.js');
// window.scrollTo(0,document.body.scrollHeight);

var config = {
  apiKey: "give your's",
  authDomain: "give your's",
  databaseURL: "give your's",
  projectId: "give your's",
  storageBucket: "give your's",
  messagingSenderId: "give your's"
};

firebase.initializeApp(config);  

// if( 'function' === typeof importScripts) {
//    importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase-app.js');
//    importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase-messaging.js');
//    importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase.js');
   
//    addEventListener('message', onMessage);

//    function onMessage(e) { 
//      // do some work here 
//    }    
// }

function bal(){
// var objDiv = document.getElementById("scroll");

// var scrollT = document.getElementById("scroll");
// scrollT.scrollTop = scrollT.scrollHeight;
$('#scroll').stop().animate({
  scrollTop: $('#scroll')[0].scrollHeight
}, 800);
document.getElementById("")
}

$(document).ready(function(){
 $('#scroll').stop().animate({
  scrollTop: $('#scroll')[0].scrollHeight
}, 800); 
});


 window.onload=bal;
 



    var n = localStorage.getItem('on_load_counter');

    if (n === null) {
        n = 0;
     
    }

     n++;

    localStorage.setItem("on_load_counter", n);
    console.log(n);
    if(n<=1){

    alert("Disclaimer:if you are first user of nubar \n go profile and set an image first");
  }


//**preview image**

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




// window.onload=scrollSmoothToBottom;
/*node js used diffrent user at a time so it is not possible to
 catch specific authenticated user.it shows user.uid not declared 
 or cannot read uid value is null
 */
  
 
  // Get Instance ID token. Initially this makes a network call, once retrieved
  // subsequent calls to getToken will return from cache.
//   const messaging = firebase.messaging();

//  messaging.requestPermission()
// .then(function() {
//   console.log('Notification permission granted.');
//   // TODO(developer): Retrieve an Instance ID token for use with FCM.
//   // ...
// })
// .catch(function(err) {
//   console.log('Unable to get permission to notify.', err);
// });
//   messaging.getToken()
//   .then(function(currentToken) {
//     if (currentToken) {
//       sendTokenToServer(currentToken);
//       updateUIForPushEnabled(currentToken);
//     } else {
//       // Show permission request.
//       console.log('No Instance ID token available. Request permission to generate one.');
//       // Show permission UI.
//       updateUIForPushPermissionRequired();
//       setTokenSentToServer(false);
//     }
//   })
//   .catch(function(err) {
//     console.log('An error occurred while retrieving token. ', err);
//     showToken('Error retrieving Instance ID token. ', err);
//     setTokenSentToServer(false);
//   });

// messaging.onTokenRefresh(function() {
//   messaging.getToken()
//   .then(function(refreshedToken) {
//     console.log('Token refreshed.');
//     // Indicate that the new Instance ID token has not yet been sent to the
//     // app server.
//     setTokenSentToServer(false);
//     // Send Instance ID token to app server.
//     sendTokenToServer(refreshedToken);
//     // ...
//   })
//   .catch(function(err) {
//     console.log('Unable to retrieve refreshed token ', err);
//     showToken('Unable to retrieve refreshed token ', err);
//   });
// });

 


 firebase.auth().onAuthStateChanged(function(user) {
// console.log(user.email);

 







  var userref = firebase.database().ref("users/user/");
  var userinforef=userref.child('profileinfo/'+user.uid);
  var profileref=userref.child('profilepic/');
  var messageref=userref.child('message/');
  var personalizeref=userref.child('color/'+user.uid);
  var getpersonalizeref=userref.child('color/');
// var username=document.getElementById('username');



//*****get user info*****


// function assosiate(imgurl){

userinforef.on("value",function(snapshot){
 
 var data=snapshot.val();
   // console.log(data);

console.log(user.email);
   var email=data.email;
   var name=data.name;
   var userid=data.UID;
console.log(userid);  
   if(userid===user.uid){
   console.log(email);
 console.log(name);

    //addMessage(email,message,name); 
    document.getElementById('uname').innerHTML=name;
    getname(name);
    //getvalue(name,imgurl);
  }
  else{

   console.log("something wrong is happend");
 }

 
});




 //**Set Color**
 setcolor.addEventListener('click',function(e){

  const setfont=document.getElementById('setfontcode');
  const getfont=document.querySelector('option[name="font"]:checked').value;
  const setcolor=document.getElementById('setcolorcode');
  
  const getcolor=document.querySelector('option[name="color"]:checked').value;

  personalizeref.set({
    UID:user.uid,
    font:getfont,
    color: getcolor,
    email: user.email,
  });
       // console.log('color set in database');

     });

//**get color**


getpersonalizeref.on("child_added", function(snapshot) {

 var getcolor=snapshot.val();
 var email=getcolor.email;
 var color=getcolor.color;
 var font=getcolor.font;

 console.log(color);
 console.log(font);
       // addMessage(email,message,color);
       if(email===user.email)
       {
         // getstyle(color,font);
        document.getElementById('allhead').style.background = color;
        document.getElementById('options').style.background = color; 
        document.getElementById('mySidenav').style.background = color;
        document.getElementById('mySidenav2').style.background = color;
        document.getElementById('chatcolor-dropdown').style.background=color;
        document.getElementById('setcolor').style.background=color;
        document.getElementById('messageText').style.background=color;
        //document.getElementById('nb').style.fontFamily=font;
        document.getElementById('messageText').style.fontFamily=font;
         document.getElementById('select1').innerHTML=font;
         document.getElementById('select1').value=font;
         document.getElementById('select2').innerHTML=color;
         document.getElementById('select2').value=color;
        document.getElementById('uname').style.fontFamily=font;
         
        document.getElementById('chngimg').style.fontFamily=font;
        
document.getElementById('actvusr').style.fontFamily=font;
        
        document.getElementById('chatcolor-dropdown').style.fontFamily=font;
        document.getElementById('setcolor').style.fontFamily=font;
        
        document.getElementById('userlist').style.fontFamily=font;
        // document.getElementsByClassName("dom").style.fontFamily=font;
        // document.querySelectorAll("#myCircle1, #myCircle2, #myCircle3, #myCircle4")
        // document.getElementById('submit').style.background=color;
        // document.getElementById('submit').style.border="1px" "solid" color;
        
        
        //document.getElementById('message').style.background=color;
        //document.getElementById('msg').style.color=color;        
        //document.p.style.color=color;
        
        // document.body.style.background=color;
        // document.b.style.color=color;


      }
      else{
        console.log();
      }

    });





//**upload profile pic to firebase storage and write reference url to database
var fileButton=document.getElementById('uploadprofilepic');
var storageRef=firebase.storage().ref();
fileButton.addEventListener('change',function(e){
  var file=e.target.files[0];
  
  var task=storageRef.child('profilepic/'+ file.name).put(file);
 document.getElementById("proimg").innerHTML="propic";


  task.on('state_changed',
    function(snapshot){

    },function(err){
      var error=err.message;
      console.log(error);
    },function(){
      var downloadURL=task.snapshot.downloadURL;
      
      console.log(downloadURL);
      
// download(downloadURL);
// var img=document.getElementById('proimg');
// img.src=downloadURL;
// var user = firebase.auth().currentUser ;
var userref = firebase.database().ref("users/user/");

userref.child('profilepic/' +user.uid).set({
 profilepic:downloadURL,
 UID:user.uid,
 email:user.email,
});
});

});



// var user=firebase.auth().currentUser;


//Read and retrive image url from firebase db and **Show Image**
function getname(name){
profileref.on("child_added", function(snapshot) {
  var img = snapshot.val();
    
    // var userid = img.userid; 
    var imgurl = img.profilepic;
    var email=img.email;
    var userid=img.UID;
    userlist(email,imgurl);
    // var username=user.name.replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
    

    if(userid===user.uid){
        

     var img=document.getElementById('proimg');
   // const fakeurl=document.getElementById('proimg').innerHTML;
      // var imgmsg=document.getElementById('mail1')
      // imgmsg.src=imgurl;
       
      
      img.src=imgurl;
      // assosiate(imgurl);
       getvalue(name,imgurl);
        }


   });

}
window.onload=getname;






//** push message**




if (user!=null) {
  var userref = firebase.database().ref("users/user/");
   // console.log(user.id);
 }
 else{
  console.log("Try Again");
}




//****set message info*****
function getvalue(name,imgurl){
  console.log(name);

  var submit=document.getElementById('submit');
  submit.addEventListener('click',e =>{ 
 


var txt=document.getElementById("messageText").value;
    console.log(imgurl);
    
   

    if(txt===""){
      alert("please input some message");
    }

    else{
     var d = new Date();
    
    
    var date = d.toLocaleString();
      //var date=System.DateTime.Now.ToString("MM-dd-yyyy");
  var messageinfo=userref.child('message').push({
     
      message:message.value,
      email:user.email,
      UID:user.uid,
      date:date,
      name:name,
      imgurl:imgurl,
    // username:user.google.displayName
    
  });
 
}

  document.getElementById("messageText").value = "";
  });
}
window.onload=getvalue;


//**Retrive messages**


 
 
var $messageList = $("#messageList");

 

function addMessage(font,color,userid,getdate,email,message,name,imgurl) {
  // console.log(getdate);
  // console.log(user.uid);
console.log(font);
    var el = $("<li class='list-group-item' class='username' ><img src="+imgurl+" style='width:30px;height:30px; border-radius:25px;'><b style='color:orange;padding:0px 0px 0px 10px;'>"+ name+"</b><p style='font-size:6px;color:gray;padding:1px 0px 0px 40px;opacity:.7'>"+getdate+ "</p><p id='msg'style='color:"+color+";font-family:"+font+"; padding:5px 0px 0px 45px;'> "+ message + "</p> </li></br>");
//var el2 = $("<li class='list-group-item' id='username' style='box-shadow:none;border:none;position:relative;margin-bottom:90px;text-align:left;'><img src="+imgurl+" style='width:30px;height:30px; border-radius:25px;'><b style='color:orange;padding:0px 0px 0px 10px;'>"+ name+"</b><p style='color:gray;padding:5px 0px 0px 45px;'> "+ message + "</p></li></br>");
     
     //var el = $(message );

$messageList.append(el);
 
   
// console.log(color.clr);
  //console.log(c);
  // var el2 = $("<li class='list-group-item' id='username' style='box-shadow:none;border:none;position:relative;margin-bottom:5px;text-align:left;'><img src="+imgurl+" style='width:30px;height:30px; border-radius:25px;'><b style='color:orange;padding:0px 0px 0px 10px;'>"+ name+"</b></li>");
    // $messageList.animate({scrollTop: $messageList.prop("scrollHeight")}, 1000);
   
// $userlist.append(el2);    
// $messageList2.append(el2);

}

// function (){

getpersonalizeref.orderByChild('color/'+user.uid).on('child_added',function(snapshot){
   var cl=snapshot.val();
   if(user.uid===cl.UID){
    var color=cl.color;
    var font=cl.font;
    // console.log(color);
    // console.log(font);
    msgref(color,font)
  }
});
function msgref(color,font){
messageref.on("child_added",function(snapshot) {
  // var messages = snapshot.val();
 console.log(color);
 console.log(font);
  var data=snapshot.val();
   
   var email=data.email;
   var message=data.message;
   var getdate=data.date;
   var userid=data.UID;
   var name=data.name;
   var imgurl=data.imgurl;

 
   // var getdate=date.toString();
// timeSince(date);
// console.log(uname,email,message,name,imgurl);
    addMessage(font,color,userid,getdate,email,message,name,imgurl);
  
  });

}

// function namelist(name,)

var $userlist = $("#userlist"); 
function userlist(email,imgurl){
  
  var el2 = $("<li class='list-group-item' class='username' style='box-shadow:none;border:none;position:relative;margin-bottom:5px;text-align:left;'><img src="+imgurl+" style='width:30px;height:30px; border-radius:25px;'><b style='color:orange;padding:0px 0px 0px 10px;'>"+ email+"</b></li>");
   
$userlist.append(el2);    
 // $messageList2.append(el2);

}



// var info=userinf();
// var uname=info.name;
// console.log(uname);







//**Logout**

const message=document.getElementById('messageText');

const btnLogout=document.getElementById('btnLogout');
const nameuser=document.getElementById('profileusername');

// function timeSince(date) {

//   var seconds = Math.floor((new Date() - date) / 1000);

//   var interval = Math.floor(seconds / 31536000);

//   if (interval > 1) {
//     return interval + " years";
//   }
//   interval = Math.floor(seconds / 2592000);
//   if (interval > 1) {
//     return interval + " months";
//   }
//   interval = Math.floor(seconds / 86400);
//   if (interval > 1) {
//     return interval + " days";
//   }
//   interval = Math.floor(seconds / 3600);
//   if (interval > 1) {
//     return interval + " hours";
//   }
//   interval = Math.floor(seconds / 60);
//   if (interval > 1) {
//     return interval + " minutes";
//   }
//   return Math.floor(seconds) + " seconds";
// }
// var aDay = 24*60*60*1000
// console.log(timeSince(new Date(Date.now()-aDay)));
// console.log(timeSince(new Date(Date.now()-aDay*2)));





});

btnLogout.addEventListener('click',e =>{
  firebase.auth().signOut().then(function(){

    console.log("Signed out");
    localStorage.clear();

    window.location.href="../index.html";

  });
});












