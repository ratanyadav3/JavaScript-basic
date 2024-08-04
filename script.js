import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCgxkjJW4Mbt_1DLo79Sa9nqKPwky2CKTM",
    authDomain: "fir-auth-82e58.firebaseapp.com",
    projectId: "fir-auth-82e58",
    storageBucket: "fir-auth-82e58.appspot.com",
    messagingSenderId: "210646827029",
    appId: "1:210646827029:web:8a8ce942b1de0e02878e1c",
    measurementId: "G-VPH17VKLZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to show home section
function showHomeSection() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const homeSection = document.getElementById('home-section');
    
    if (loginForm && signupForm && homeSection) {
        loginForm.style.display = 'none';
        signupForm.style.display = 'none';
        document.querySelector('.container').style.display='none';
        homeSection.style.display = 'block';
        document.querySelector('.container').classList.add('hidden');
    } else {
        console.error('One or more elements for showing home section are missing.');
    }
}

// Function to show login section
function showLoginSection() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const homeSection = document.getElementById('home-section');
    
    if (loginForm && signupForm && homeSection) {
        signupForm.style.display = 'none';
        document.querySelector('.container').style.display='block'
        loginForm.style.display = 'block';
        homeSection.style.display = 'none';
       
    } else {
        console.error('One or more elements for showing login section are missing.');
    }
}

// Show and hide forms
document.getElementById('show-signup')?.addEventListener('click', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    
    if (loginForm && signupForm) {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    } else {
        console.error('One or more elements for showing signup form are missing.');
    }
});

document.getElementById('show-login')?.addEventListener('click', showLoginSection);

// Sign up functionality
document.getElementById('signup-button')?.addEventListener('click', () => {
    const email = document.getElementById('signup-email')?.value;
    const password = document.getElementById('signup-password')?.value;
    
    if (email && password) {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Switch to home section
                showHomeSection();
            })
            .catch((error) => {
                alert('Error signing up: ' + error.message);
            });
    } else {
        console.error('Signup email or password is missing.');
    }
});

// Login functionality
document.getElementById('login-button')?.addEventListener('click', () => {
    const email = document.getElementById('login-email')?.value;
    const password = document.getElementById('login-password')?.value;
    
    if (email && password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Switch to home section
                showHomeSection();
            })
            .catch((error) => {
                alert('Error logging in: ' + error.message);
            });
    } else {
        console.error('Login email or password is missing.');
    }
});

// Forgot Password functionality
document.getElementById('forgot-password')?.addEventListener('click', () => {
    const email = document.getElementById('login-email')?.value;
    
    if (email) {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Password reset email sent!');
            })
            .catch((error) => {
                alert('Error: ' + error.message);
            });
    } else {
        console.error('Email is missing for password reset.');
    }
});

// Logout functionality
document.getElementById('logout')?.addEventListener('click', () => {
    signOut(auth).then(() => {
        // Switch back to login form
        showLoginSection();
    }).catch((error) => {
        alert('Error logging out: ' + error.message);
    });
});
