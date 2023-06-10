import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthenticationProviders from './providers/AuthenticationProvider'
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthenticationProviders>
      <RouterProvider router={router} />
    </AuthenticationProviders>
    </QueryClientProvider>
   
    
  </React.StrictMode>,
)
