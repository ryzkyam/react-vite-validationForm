import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import AboutCompany from './pages/AboutCompany.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider >
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ChakraProvider>,
  </React.StrictMode>
)
