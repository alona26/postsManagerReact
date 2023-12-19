import classes from '../Components/Form.module.css';
import {useState} from 'react';
import Modal from '../Components/Modal';
import {Link} from 'react-router-dom';


function Form({onAddPost}){
    const [dataa,updateFunction]= useState('');
    const [data1,updateNameFunction]= useState('');

    function changeHandler(event)
    {
        updateFunction(event.target.value);
    }
    
    function changeHandler1(event)
    {
        updateNameFunction(event.target.value);
    }
    function submitHandler(event){
        event.preventDefault();
        const newPostData = {
            body: dataa,
            author: data1
        };
        onAddPost(newPostData);
        // onCancel();

    }
    return (
        <Modal>
        <form className={classes.form} onSubmit={submitHandler}>
            <p >
                <label htmlFor="body">Text</label>
                <textarea id="body"  required rows={3} onChange={changeHandler}></textarea>
            </p>
            <p >
                <label htmlFor="name" >Your name</label>
                <input type="text" id="name" required onChange={changeHandler1}/>
            </p>
            <p className={classes.actions}>
            <Link to="/" className={classes.actions} >Cancel</Link>
            <button >Submit</button>


            </p>
     
        </form>
        </Modal>
    )
}
export default Form;