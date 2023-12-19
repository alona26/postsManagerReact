import Post from './Post';
import classes from './ListPost.module.css'
import { useLoaderData } from 'react-router-dom';

function ListPost(){
    const posts = useLoaderData();
    // function addPostHandler(postData){
    //     fetch('http://localhost:8080/posts',{
    //         method:'POST',
    //         body:JSON.stringify(postData),
    //         headers:{
    //             'content-Type':'application/json'
    //         }
    // });
    //     setPosts((existingPost)=>[postData,...existingPost]);
    // }
    return (
        <>
        {posts.length>0&&(
        <ul className = {classes.list}>
            {posts.map((post)=>
            <Post key= {post.id} id= {post.id} author = {post.author} body = {post.body}/>)}
        </ul>
)}
{posts.length === 0     && ( <div style={{textAlign:'center',color:'white'}}>
        <h2>Ther are no posts yet</h2>
        <p>Start adding some!</p>
        </div>
)}
        </>
    );
}
export default ListPost;