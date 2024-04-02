// Function to retrieve blog posts from local storage
function getBlogPosts() {
    try {
      // Retrieve blog posts from local storage or create an empty array if not found
      return JSON.parse(localStorage.getItem("blogPosts")) || [];
    } catch (error) {
      console.error("Error retrieving blog posts:", error);
      return [];
    }
  }
  
  // Function to display blog posts on the page
  function displayBlogPosts() {
    // Get blog posts from local storage
    var blogPosts = getBlogPosts();
  
    // Get reference to the blog container
    var blogContainer = document.getElementById("blog-container");
  
    // Clear existing content
    blogContainer.innerHTML = "";
  
    // Loop through each blog post and display it
    blogPosts.forEach(function (post) {
      // Create elements for the blog post
      var postDiv = document.createElement("div");
      postDiv.classList.add("post");
  
      var titleElement = document.createElement("h2");
      titleElement.textContent = post.blogTitle;
  
      var contentElement = document.createElement("p");
      contentElement.textContent = post.blogContent;
  
      var usernameElement = document.createElement("p");
      usernameElement.textContent = post.username;
  
      // Append elements to the post container
      postDiv.appendChild(titleElement);
      postDiv.appendChild(contentElement);
      postDiv.appendChild(usernameElement);
  
      // Append post container to the blog container
      blogContainer.appendChild(postDiv);
    });
  }
  
  // Function to initialize the blog page
  function initializeBlogPage() {
    // Display blog posts on page load
    displayBlogPosts();
  }
  
  // Call the initialize function when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", initializeBlogPage);
  