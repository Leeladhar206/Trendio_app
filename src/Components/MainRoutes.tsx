
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from "../Pages/HomePage"
import Men from "../Pages/Men"
import Women from "../Pages/Women"
import Accessories from '../Pages/Accessories'
import Admin from '../Pages/Admin'
import CartPage from '../Pages/CartPage'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Wishlist from '../Pages/Wishlist'
import About from '../Pages/About'
import SinglePage from '../Pages/SinglePage'
import { Alert, AlertIcon, Stack } from '@chakra-ui/react'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}   />  
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/men" element={<Men/>}   />
        <Route path="/women" element={<Women/>} />
        <Route path="/accessories" element={<Accessories/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/wishlist" element={<Wishlist/>} />
        <Route path="/product:id" element={<SinglePage/>} />
        <Route path="*" element={<Stack spacing={3}>
  <Alert status='error'>
    <AlertIcon />
    There was an error processing your request
  </Alert>  </Stack>} />
    </Routes>
  )
}

export default MainRoutes