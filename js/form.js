// const formEl=document.getElementById("blogForm")

formEl.addEventListener("submit",function(event){
    event.preventDefault()
    var userBlog = {
        id: Math.floor(Math.random()*999),
        username: document.getElementById("username").value,
        blogTitle: document.getElementById("title").value,
        blogContent: document.getElementById("content").value
    }
    var blogPost = JSON.parse(localStorage.getItem("blogPost")) || []
    blogPost.push(userBlog)
    localStorage.setItem("blogPost",JSON.stringify(blogPost))
    location.replace("./blog.html")
})

document.addEventListener('DOMContentLoaded', function () {
    
    
    const toggleButton = document.getElementById('toggle-theme');

   

    
    function toggleTheme() {
        console.log('Toggle theme function called');
        document.body.classList.toggle('dark-theme');
        const isDarkMode = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }



    
    toggleButton.addEventListener('click', function() {
        console.log('Button clicked');
        toggleTheme();
    });

    toggleButton.addEventListener('click', function() {
        console.log('Body clicked');
        toggleTheme();
    });
    

   

    
    document.body.addEventListener('click', toggleTheme);

    
    const userPreference = localStorage.getItem('theme');
    if (userPreference === 'dark') {
        document.body.classList.add('dark-theme');
    }
});
