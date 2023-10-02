

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'

export const AdminRoutes = () => {
  return (

    <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/addProduct"  element= {<AddProduct />} />
        <Route path="/editProduct"  element= {<EditProduct />} />
    </Routes>
  )
}
