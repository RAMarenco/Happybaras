import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "primereact/resources/themes/lara-light-blue/theme.css"
import "primereact/resources/primereact.min.css"
import { PrimeReactProvider } from 'primereact/api';
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
    <PrimeReactProvider value={{ unstyled: false }}>
      <RouterProvider router={router}/>
    </PrimeReactProvider>
    {
      //</GoogleOAuthProvider>
    }
  </React.StrictMode>,
)
