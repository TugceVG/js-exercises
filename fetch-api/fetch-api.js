const writeToScreen = (data = []) => {
    const postContainer = document.querySelector(".posts-container");
    data.forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post-div");
        const postHead = document.createElement("h3");
        const postBody = document.createElement("p");
        postHead.innerHTML = `User ${post.userId} - ${post.title} `;
        postBody.innerHTML = `${post.body}`;
        postDiv.appendChild(postHead);
        postDiv.appendChild(postBody);
        postContainer.appendChild(postDiv);
    })
};


const getPosts = async () => {
    //Fetching data by Native Fetch
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then(res => res.json())
    //     .then(data => console.log(data));
    //Fetching data by Axios Fetch
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        // my local comment !
        // the comment from remote !
        writeToScreen(res.data);
    } catch (e) {
        console.log(e)
    }
};

getPosts();