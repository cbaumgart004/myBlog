//Set variables for page elements
const title = document.getElementById('blogTitle')
const text = document.getElementById('blogText')
const submitButton = document.getElementsByName('submitButton')
//TODO: Save all form data as object using JSON.stringify
    function saveBlog() {
        const blogEntry = {
        title: title.value, 
        text: text.value.trim(),

    };
    //Now set it and stringify it
    localStorage.setItem('blogEntry', JSON.stringify(blogEntry));
};
//TODO: Take username and store.  Attach it to each blog post.
//TODO: Dynamic screen sizes


//TODO:Format blog page with css
//TODO: Toggle light/dark mode
//TODO: Use local storage to capture text from blogID to store on blog.html page
//TODO: Add event listener to "Submit" button to capture and store.
        //submitButton.addEventListener('click', )
//TODO:Add time stamp to blog posts to be captured alongside blog elements

//TODO: Bonus: allow users to edit old blog posts.  And timestamp?

//TODO: Prompt users for sign-in info or to add a new username
//TODO: Store user login info