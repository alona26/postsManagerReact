import {Link} from 'react-router-dom';
import classes from './MainHeader.module.css';
import { MdAdd, MdMessage } from "react-icons/md";

function MainHeader()
{
    return (
    
        <header className={classes.header}>
            
        <h1 className={classes.logo}>
        <MdMessage />React Poster</h1>
        <Link to="/create-post" type="button" className={classes.button} ><MdAdd size={21}/>New Post</Link>
        </header>
    );
}
export default MainHeader