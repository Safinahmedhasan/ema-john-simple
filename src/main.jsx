import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home';
import Shop from './components/Header/Shop/Shop';
import Oders from './components/Oders/Oders';
import Login from './components/Login/Login';
import Inven from './components/Inven/Inven';
import carProductLoader from './components/Loaders/cartProductLoader';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'/oders',
        element: <Oders></Oders>,
        loader: carProductLoader
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path: '/inventory',
        element: <Inven></Inven>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
