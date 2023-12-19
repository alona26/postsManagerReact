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
