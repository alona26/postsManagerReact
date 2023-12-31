import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Posts, {loader as postLoader} from './routes/Posts';
import reportWebVitals from './reportWebVitals';
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import NewPost, {action as newPostAction, update as updateAction, loader as loadPostData} from './routes/NewPost';
import RootLayout from './routes/RooutLayout';
import PostDetails, {loader as postLoaderDetails} from './routes/PostDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: postLoader,
        children: [
          {
            path: '/create-post',
            element: <NewPost />,
            action: newPostAction // Action to handle creating a new post
          },
          {
            path: '/create-post/:postId',
            element: <NewPost />,
            action: updateAction, // Action to handle editing an existing post
            loader:loadPostData
          },
          {
            path: '/:postId',
            element: <PostDetails />,
            loader: postLoaderDetails
          }
        ]
      }
    ]
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
