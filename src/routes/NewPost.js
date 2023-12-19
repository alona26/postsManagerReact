import classes from '../Components/Form.module.css';
import Modal from '../Components/Modal';
import { useLoaderData, Link, Form, redirect } from 'react-router-dom';

function NewPost() {
    const postData = useLoaderData();

    if (postData) {
        return (
            <Modal>
                <Form method='post' className={classes.form} >
                    <p >
                        <label htmlFor="body">Text</label>
                        <textarea id="body" required rows={3} name="body" defaultValue={postData.post.body} ></textarea>
                    </p>
                    <p >
                        <label htmlFor="name" >Your name</label>
                        <input type="text" id="name" required name="author" defaultValue={postData.post.author} />
                    </p>
                    <p className={classes.actions}>
                        <Link to=".." className={classes.actions} >Cancel</Link>
                        <button >Submit</button>
                    </p>

                </Form>
            </Modal>
        );
    }
    return (
        <Modal>
            <Form method='post' className={classes.form} >
                <p >
                    <label htmlFor="body">Text</label>
                    <textarea id="body" required rows={3} name="body" ></textarea>
                </p>
                <p >
                    <label htmlFor="name" >Your name</label>
                    <input type="text" id="name" required name="author"/>
                </p>
                <p className={classes.actions}>
                    <Link to=".." className={classes.actions} >Cancel</Link>
                    <button >Submit</button>
                </p>

            </Form>
        </Modal>

    );
}
export default NewPost;

export async function action({ request }) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'content-Type': 'application/json'
        },
    });

    return redirect('/');
}

export async function update({ params, request }) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    await fetch('http://localhost:8080/posts/' + params.postId, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'content-Type': 'application/json'
        },
    });

    return redirect('/');
}
export async function loader({ params }) {
    if (params.postId) {
        const response = await fetch('http://localhost:8080/posts/' + params.postId)

        const resData = await response.json();
        return resData;
    }
    return;
}