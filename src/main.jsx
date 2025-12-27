import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './assets/page/login/Login.jsx'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
