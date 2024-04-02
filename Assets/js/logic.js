// Function to greet the user
function greetUser(username) {
    alert("Hello, " + username + "! Welcome to our website.");
  }
  
  // Function to log a message to the console
  function logMessage(message) {
    console.log("Message logged: " + message);
  }
  
  // Function to initialize the logic for the website
  function initializeWebsiteLogic() {
    // Example usage of greetUser function
    greetUser("John");
  
    // Example usage of logMessage function
    logMessage("Initializing website logic.");
  }
  
  // Call the initialize function when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", initializeWebsiteLogic);
  
