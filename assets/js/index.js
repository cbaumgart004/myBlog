//Set variables for page elements
const title = document.getElementById('blogTitle');
const text = document.getElementById('blogText');
const submit = document.getElementById('submitButton');
//TODO: Save all form data as object using JSON.stringify
//TODO: Use local storage to capture text from blogID to store on blog.html page

function saveBlog() {
        const blogEntry = {
        title: title.value, 
        text: text.value.trim(),

    };
    //Clear fields
    title.value = '';
    text.value = '';
    
    console.log(blogEntry);
    addEntry(blogEntry);
    
}; 
//TODO: Add blog entry to blogEntries array
function addEntry (blogEntry) {
    //Initialize the blogEntries array ONLY if it doesn't already exist
    let blogEntries = JSON.parse(window.localStorage.getItem('blogEntries')) || [];
    console.log(blogEntry);
    console.log(blogEntries);
    blogEntries.push(blogEntry);
    localStorage.setItem('blogEntries', JSON.stringify(blogEntries));
    console.log(blogEntries);

};

//TODO: Take username and store.  Attach it to each blog post.
//TODO: Dynamic screen sizes


//TODO:Format blog page with css
//TODO: Toggle light/dark mode

//TODO: Add event listener to "Submit" button to capture and store.
        submit.addEventListener('click', function (event) {
            //don't refresh the page before capturing data
            event.preventDefault();
            saveBlog();
            
        });
//TODO:Add time stamp to blog posts to be captured alongside blog elements

//TODO: Bonus: allow users to edit old blog posts.  And timestamp?

//TODO: Prompt users for sign-in info or to add a new username
//TODO: Store user login info
//localStorage.clear();