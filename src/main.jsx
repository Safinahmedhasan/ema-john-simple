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
import SignUp from './components/signUp/SignUp';
import AuthProviders from './components/providers/AuthProviders';
import CheckOut from './components/checkOut/CheckOut';
import PrivateRoute from './components/routes/PrivateRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/oders',
        element: <Oders></Oders>,
        loader: carProductLoader
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/inventory',
        element: <PrivateRoute><Inven></Inven></PrivateRoute>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/checkOut',
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
      },
      {
        path: "*",
        element: <div>343434343</div>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
