// script.js
document.addEventListener("DOMContentLoaded", function() {
    const blogForm = document.getElementById("blogForm");
    const formMessage = document.getElementById("formMessage");

    blogForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        if (username && title && content) {
            // Store blog post data in localStorage
            const postData = {
                username: username,
                title: title,
                content: content
            };
            const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];
            existingPosts.push(postData);
            localStorage.setItem("posts", JSON.stringify(existingPosts));

            // Redirect to posts page
            window.location.href = "posts.html";
        } else {
            formMessage.textContent = "Please complete all fields.";
        }
    });
});