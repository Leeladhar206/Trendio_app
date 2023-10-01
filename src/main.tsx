import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import AuthContextProvider from './Components/AuthContextProvider.tsx'
import { Provider } from 'react-redux'
import {store} from  "./Redux/store"


ReactDOM.createRoot(document.getElementById('root')!).render(

  
  <BrowserRouter>
    <ChakraProvider>
    <AuthContextProvider>
    <Provider store={store}>
       <App />
      </Provider>
    </AuthContextProvider>
   </ChakraProvider>
   </BrowserRouter>
  
)
