import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './Components/AuthContextProvider.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
  <BrowserRouter>
    <ChakraProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
   </ChakraProvider>
   </BrowserRouter>
  </React.StrictMode>,
)
