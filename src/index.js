import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './Pages/Login';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/",
  //   element: <Login />,
  // },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

