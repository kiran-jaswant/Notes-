import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Home from '../src/View/Home/Home';
import Notes from '../src/View/Notes/Notes';
import Land from './View/LandingPage/Land';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Land></Land>

  },
  {
    path:"/home",
    element:<Home></Home>
  },
  {
    path:"/newnote",
    element:<Notes></Notes>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}></RouterProvider>
);
