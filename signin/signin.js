const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, set, get, ref, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCiDgjw0fw2LxlwAihDuerjgvoO0920Reo",
    authDomain: "mentalhealth-7ea76.firebaseapp.com",
    projectId: "mentalhealth-7ea76",
    storageBucket: "mentalhealth-7ea76.appspot.com",
    messagingSenderId: "577865166835",
    appId: "1:577865166835:web:1e8ee89fd65f7fb3d76c86",
    measurementId: "G-9GYFTFXFDC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);
const dbref = ref(db);

let name = document.getElementById('uname');
let password = document.getElementById('pwd');
let RegForm = document.getElementById('RegForm');
let LogForm = document.getElementById('LogForm');

let RegisterUser = evt => {
    evt.preventDefault();
    const email = name.value + "@mentalhealth-7ea76.firebaseapp.com";
    createUserWithEmailAndPassword(auth, email, password.value)
        .then((credentials) => {
            set(ref(db, 'UsersAuthList/' + credentials.user.uid), {
                name: name.value
            });
        })
        .catch((error) => {
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
        });
};

let SignInUser = evt => {
    evt.preventDefault();
    const email = name.value + "@mentalhealth-7ea76.firebaseapp.com";
    signInWithEmailAndPassword(auth, email, password.value)
        .then((credentials) => {
            get(child(dbref, 'UsersAuthList/' + credentials.user.uid)).then((snapshot) => {
                if (snapshot.exists()) {
                    sessionStorage.setItem("user-info", JSON.stringify({
                        name: snapshot.val().name
                    }));
                    sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
                    window.location.href = "index.html";
                } else {
                    alert('User not found.');
                }
            });
        })
        .catch((error) => {
            alert(error.message);
            console.log(error.code);
            console.log(error.message);
        });
};

RegForm.addEventListener('submit', RegisterUser);
LogForm.addEventListener('submit', SignInUser);
auth.onAuthStateChanged(user => {
    if (user) {
        const username = user.displayName;
        if (username) {
            const loginButton = document.getElementById('loginButton');
            if (loginButton) {
                loginButton.textContent = username.charAt(0).toUpperCase();
            }
        }
    }
});
