// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
  
    // Get form values
    const username = document.getElementById("username").value;
    const blogTitle = document.getElementById("title").value;
    const blogContent = document.getElementById("content").value;
  
    // Ensure required fields are not empty
    if (!username || !blogTitle || !blogContent) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Create blog object
    const userBlog = {
      id: Math.floor(Math.random() * 999), // Generate unique ID (can be improved for better uniqueness)
      username: username,
      blogTitle: blogTitle,
      blogContent: blogContent,
    };
  
    // Get existing blog posts from local storage or create an empty array
    const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
  
    // Add new blog post to the array
    blogPosts.push(userBlog);
  
    // Save updated blog posts array to local storage
    localStorage.setItem("blogPosts", JSON.stringify(blogPosts));
  
    // Redirect to blog page
    console.log("Redirecting to blog page...");
    window.location.replace("./blog.html");
  }
  
  // Function to toggle theme
  function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    const isDarkMode = document.body.classList.contains("dark-theme");
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }
  
  // Event listener for form submission
  document.getElementById("blogForm").addEventListener("submit", handleFormSubmission);
  
  // Event listener for DOMContentLoaded
  document.addEventListener("DOMContentLoaded", function () {
    // Theme toggle button
    const toggleButton = document.getElementById("toggle-theme");
  
    // Event listener for theme toggle button
    toggleButton.addEventListener("click", toggleTheme);
  
    // Load theme preference from local storage
    const userPreference = localStorage.getItem("theme");
  
    // Apply theme preference
    if (userPreference === "dark") {
      document.body.classList.add("dark-theme");
    }
  });
  