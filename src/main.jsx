import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContextProvider from './context/Globalcontext.jsx'
import router from './router/Router.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
    <RouterProvider router={router}></RouterProvider>

    </ContextProvider>
  </StrictMode>,
)
