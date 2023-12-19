import '../App.css';
import { Outlet } from 'react-router-dom';
import ListPost from '../Components/ListPost';


function Posts() {
  return (
<>
    <Outlet/>
    <main>
      <ListPost />
    </main>
</>

    
    );
}

export default Posts;


export async function loader(){
  const res = await fetch('http://localhost:8080/posts')
  const resData = await res.json();
  return resData.posts;
}
