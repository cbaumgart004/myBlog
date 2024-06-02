const blogs = document.getElementById('blogs');
const toggle = document.getElementById('themeToggle')

function init () {
    const blogEntries = JSON.parse(localStorage.getItem('blogEntries'));
    renderBlog(blogEntries);
};  

function renderBlog(blogEntries) {
    for (i =0; i < blogEntries.length; i++) {
        //create a container for the blog as a whole
        const blogBlock = document.createElement('div')
        blogBlock.classList.add('blogClass')
        blogs.appendChild(blogBlock);
        //titles will become h2 elements
        const h2El = document.createElement('h2');
        h2El.textContent = blogEntries[i].title;
        //text becomes p elements
        const pEl = document.createElement('p');
        pEl.textContent = blogEntries[i].text
        //append the document with these elements
        blogBlock.appendChild(h2El);
        blogBlock.appendChild(pEl);
    };
};

let theme = localStorage.getItem('theme') || 'dark';

if (theme === 'dark') {
    
    toggle.checked = true;
    
};

toggle.addEventListener ('click', function() {
    if (this.checked) {
        theme = 'dark'
        localStorage.setItem('theme', theme);
        
    } else {
        theme = 'light';
        localStorage.setItem('theme', theme);
        
        
    }
});

init();

