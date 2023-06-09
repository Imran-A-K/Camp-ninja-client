import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthenticationProviders from './providers/AuthenticationProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthenticationProviders>
      <RouterProvider router={router} />
    </AuthenticationProviders>
    
  </React.StrictMode>,
)
