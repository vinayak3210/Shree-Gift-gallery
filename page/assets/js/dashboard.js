// const username = localStorage.getItem('username');

// let welcome= document.getElementById("welcome");
// welcome.textContent=`WelCome to ${username}`;


// document.getElementById('logout').addEventListener('click', () => {
//     // Redirect back to the login page (index.html)
//     localStorage.removeItem('username');

//       // Close the dashboard tab and redirect the user to login
//       const dashboardTab = localStorage.getItem('dashboardTab');

//       if (dashboardTab && !dashboardTab.closed) {
//         dashboardTab.close();  // Attempt to close the tab (will work only if opened with window.open)
//       }
//       window.location.href = 'Gifts.html'; 
// })
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
});

const Username = localStorage.getItem('username');
    
    // Display the welcome message with the username
    const welcomeMessage = document.getElementById('welcome');
    welcomeMessage.textContent = `Welcome , ${Username}!`;

    // Logout button logic
    document.getElementById('logout').addEventListener('click', function() {
      // Clear the username from localStorage
      
      window.location.href = 'gifts.html';
    });