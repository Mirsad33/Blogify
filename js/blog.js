
var blogPosts = [
    {
        title: "First Blog Post",
        content: "This is my first blog post. Welcome to my blog!"
    },
    {
        title: "Second Blog Post",
        content: "This is my second blog post. Stay tuned for more content!"
    },
    {
        title: "Third Blog Post",
        content: "This is my first blog post. Welcome to my blog!"
    },
    {
        title: "Fourth Blog Post",
        content: "This is my first blog post. Welcome to my blog!"
    },
   
    
     
    
    
];

function displayBlogPosts() {
    var blogContainer = document.getElementById("blog-container");

    
    blogContainer.innerHTML = '';

    
    blogPosts.forEach(function(post) {
        var postDiv = document.createElement("div");
        postDiv.classList.add("post");

        var titleElement = document.createElement("h2");
        titleElement.textContent = post.title;

        var contentElement = document.createElement("p");
        contentElement.textContent = post.content;

        postDiv.appendChild(titleElement);
        postDiv.appendChild(contentElement);

        blogContainer.appendChild(postDiv);
    });
}


displayBlogPosts();




