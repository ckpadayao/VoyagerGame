
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCjYvZ25XBI-iU4MGlkY6E5C3gfL1Lt8nY",
    authDomain: "voyagergame-d0974.firebaseapp.com",
    projectId: "voyagergame-d0974",
    storageBucket: "voyagergame-d0974.appspot.com",
    messagingSenderId: "1006797880129",
    appId: "1:1006797880129:web:d7d93ff0f4854be14fbfc0"
};
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();
    const database = firebase.database();

    function signUp(){
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        
        const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));

        alert("Signed Up");

        //generate a random number and letter combination to make userId
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        var userNum = Math.floor(Math.random() * 100 + 1);
        var userChar = alphabet[Math.floor(Math.random() * alphabet.length)];
        var userId = userNum + userChar;

        //store values inside database
        database.ref('/users/' + userId).set({
            email_address: email.value
        });

    }

    function signIn(){
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        
        const promise = auth.signInWithEmailAndPassword(email.value, password.value);
        promise.catch(e => alert(e.message));

        alert("Signed In " + email.value);

        document.querySelector('#signOut')
        .addEventListener('click', () => {
            window.location = 'add.html';
        });

        window.location = 'add.html';

        
    }

    function signOut(){

        auth.signOut();
        alert("Signed Out");

        document.querySelector('#signOut')
            .addEventListener('click', () => {
                window.location = 'firebase.html';
        });

       window.location = 'firebase.html';

    }

    auth.onAuthStateChanged(function(user) {
        if(user) {
            var email = user.email;
            alert("Active User " + email);
            //is signed on
        }
        else{
            alert("No Active User");
        }
    });