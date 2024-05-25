const blogs = document.getElementById('blogs');

function init () {
    const blogEntries = JSON.parse(localStorage.getItem('blogEntries'));
    console.log(blogEntries);
    console.log('================');
    renderBlog(blogEntries);
};  

function renderBlog(blogEntries) {
    for (i =0; i < blogEntries.length; i++) {
        //titles will become h2 elements
        const h2El = document.createElement('h2');
        h2El.textContent = blogEntries[i].title;
        //text becomes p elements
        const pEl = document.createElement('p');
        pEl.textContent = blogEntries[i].text
        
        
        console.log(`blog title: ${blogEntries[i].title}`)
        console.log(h2El);
        //append the document with these elements
        blogs.appendChild(h2El);
        blogs.appendChild(pEl);
    };
};

init();

