
const correctUsername = localStorage.getItem('username');
const correctPassword = localStorage.getItem('password');

document.getElementById("login").addEventListener('click',function(){
    let UserInput=document.getElementById("username").value;
    let Password=document.getElementById("pass").value;

    if(UserInput==correctUsername && Password==correctPassword){
        localStorage.setItem('username', UserInput);
        window.open('dashboard.html')
    }
    else{
        
        alert("Incorrect ID Password ");
        
    }
})

