import Post from './Post';
import classes from './ListPost.module.css'
import Form from '../routes/Form';
import Modal from './Modal';
import { useState } from 'react';

function ListPost(props){
    const [posts, setPosts] = useState([]);
    function addPostHandler(postData){
        setPosts((existingPost)=>[postData,...existingPost]);
    }
    return (
        <>
        {posts.length>0 ?
        <ul className = {classes.list}>
            {posts.map((post)=><Post key= {post.body} author = {post.author} body = {post.body}/>)}
        </ul>
        :
        <div style={{textAlign:'center',color:'white'}}>
        <h2>Ther are no posts yet</h2>
        <p>Start adding some!</p>
        </div>
}
        </>
    )
}
export default ListPost;