import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Posts from './routes/Posts';
import reportWebVitals from './reportWebVitals';
import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import Form from './routes/Form';
import RootLayout from './routes/RooutLayout';


const router = createBrowserRouter([
  { 
    path:'/', 
    element: <RootLayout/>,
    children:[  
      { path : '/', element: <Posts /> , children :[

        { path : '/create-post', element: <Form />},]
      },
    ],
  },
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
