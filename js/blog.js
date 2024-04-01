
// var blogPosts = [
//     {
//         title: "First Blog Post",
//         content: "This is my first blog post. Welcome to my blog!"
//     },
//     {
//         title: "Second Blog Post",
//         content: "This is my second blog post. Stay tuned for more content!"
//     },
//     {
//         title: "Third Blog Post",
//         content: "This is my first blog post. Welcome to my blog!"
//     },
//     {
//         title: "Fourth Blog Post",
//         content: "This is my first blog post. Welcome to my blog!"
//     },
   
    
     
    
    
// ];
var blogPosts = JSON.parse(localStorage.getItem("blogPost")) || []


var blogContainer = document.getElementById("blog-container");
function displayBlogPosts() {

    
    blogContainer.innerHTML = '';

    
    blogPosts.forEach(function(post) {
        var postDiv = document.createElement("div");
        postDiv.classList.add("post");

        var titleElement = document.createElement("h2");
        titleElement.textContent = post.blogTitle;

        var contentElement = document.createElement("p");
        contentElement.textContent = post.blogContent;

        var usernameElement = document.createElement("p") ;
        usernameElement.textContent = post.username

        postDiv.appendChild(titleElement);
        postDiv.appendChild(contentElement);
        postDiv.appendChild(usernameElement);

        blogContainer.appendChild(postDiv);
    });
}


displayBlogPosts();




