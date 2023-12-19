import {Link} from 'react-router-dom';
import classes from './MainHeader.module.css';
function MainHeader()
{
    return (
    
        <header className={classes.header}>
        <h1>React Poster</h1>
        <Link to="/create-post" type="button" className={classes.button} >New Post</Link>
        </header>
    );
}
export default MainHeader