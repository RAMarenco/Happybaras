import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import { GoogleOAuthProvider } from "@react-oauth/google";
//import { CLIENTID } from "./consts";

import "./reset.css"

import Routes from './routes/routes';

const router = createBrowserRouter(Routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {
      //<GoogleOAuthProvider clientId={CLIENTID}>
    }
    <RouterProvider router={router}/>
    {
      //</GoogleOAuthProvider>
    }
  </React.StrictMode>,
)
