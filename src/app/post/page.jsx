

const PostPage = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json()
    console.log(posts);
    
    return (
        <div>
            <h1 className="text-center">Posts : {posts.length}</h1>
        </div>
    );
};

export default PostPage;