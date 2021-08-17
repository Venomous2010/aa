
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
    var message = document.getElementById("msg").value;

    firebase.database().ref(room_name).push({
        name:user_name,
        message:message,
        like:0,
    });

     document.getElementById("msg").value = " ";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
  name = message_data['name'];
  message = message_data['message'];
  like = message_data['like'];
   namewithtag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
   messagewithtag = "<h4 class='message_h4'>"+message+"</h4>";
   like_button = "<button class='btm btn-warning' id=">+firebase_message_id+"value =" + like+ "onclick='update_like(this.id)'>";
spanwithtag = "<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row = namewithtag + messagewithtag + like_button + spanwithtag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function update_like(message_id){
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes)+1;
    firebase.database().ref(room_name).child(message_id).update({
        like:updated_likes
      });
}

function logout(){
    localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}