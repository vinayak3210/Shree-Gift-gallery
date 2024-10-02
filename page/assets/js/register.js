document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

const username= document.getElementById("username").value;
const password= document.getElementById("password").value;
//  set username and password in local storage
localStorage.setItem('username',username);
localStorage.setItem('password',password);

window.location.href = 'login.html';
});