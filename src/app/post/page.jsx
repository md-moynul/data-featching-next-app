// const getPost = async() => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return res.json()

import PostCard from "@/components/PostCard";

// }
const getPost = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok){
        throw new Error('Failed to fetch posts') 
    }
    return res.json()
}
// const getPost = async() => {
//     try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//         return res.json() 
//     }
//     catch (error){
//         throw new Error('Failed to fetch posts') 
//     }
// }

const PostPage = async() => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await res.json()
    const posts = await getPost()
    
    return (
        <div className="container mx-auto ">
            <h1 className="text-center">Posts : {posts.length}</h1>
            <div className="grid grid-cols-3 gap-6">
                {posts.map( post => <PostCard key={post.id} post={post}/>)}
            </div>
        </div>
    );
};

export default PostPage;