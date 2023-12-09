import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import Router from './Router/Router.jsx';
import AuthPRovider from './AuthProvider/AuthPRovider';
import AOS from 'aos';
import 'aos/dist/aos.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthPRovider>
      <RouterProvider router={Router} />
    </AuthPRovider>
  </React.StrictMode>,
)
