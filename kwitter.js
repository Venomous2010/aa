var firebaseConfig = {
    apiKey: "AIzaSyBqWxi7QW3TOI6lRPaRmKyInjvu_FhZaLk",
    authDomain: "modified-kwitter.firebaseapp.com",
    databaseURL: "https://modified-kwitter-default-rtdb.firebaseio.com",
    projectId: "modified-kwitter",
    storageBucket: "modified-kwitter.appspot.com",
    messagingSenderId: "587510531616",
    appId: "1:587510531616:web:7a0b3f3f7d7a46ab829e45"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

////////////////////////////////////////////////////////////////////////////////////////


function addUser() {

    pass_input = document.getElementById("password").value;
    login_input = document.getElementById("login_credentials").value;

    if (pass_input == "") {
        window.alert("please put in a password");
    } else {

        window.location = "Kwitter_room.html";

        firebase.database().ref("LOGIN_DATA").child(login_input).update({
            purpose: "saving login data"
        });
        firebase.database().ref("LOGIN_DATA").child(pass_input).update({
            purpose: "saving login data"
        });

        window.location = "Kwitter_room.html";
    }


    UserLogin = document.getElementById("login_credentials").value;

    localStorage.setItem("Login", UserLogin);

    UserPass = document.getElementById("password").value;

    localStorage.setItem("password", UserPass);

}
