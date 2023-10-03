// import { useState } from 'react'
// import './Admin.css'
// import Header from './Admin/Header'
// import Sidebar from './Admin/Sidebar'
// import { AdminRoutes } from './Admin/AdminRoutes'

// function Admin() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle)
//   }

//   return (
//     <div className='grid-container'>
//       <Header OpenSidebar={OpenSidebar}/>
//       <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
//       <AdminRoutes />
//     </div>
//   )
// }

// export default Admin

import { useEffect, useState } from "react"
import "./Admin.css"
import Header from "./Admin/Header"
import Sidebar from "./Admin/Sidebar"
import { AdminRoutes } from "./Admin/AdminRoutes"
import { Navigate, Route, useNavigate, useParams } from "react-router-dom"
import Home from "./Admin/Home"
import AddProduct from "./Admin/AddProduct"
import axios from "axios"
import { URL } from "./Login"

function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  const [adminUser, setAdminUser] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios({
      method: "get",
      url: `${URL}/users`,
      params: {
        token: localStorage.getItem("token"),
        admin: true,
      },
    })
      .then((r) => {
        // console.log(r.data)
        setAdminUser(r.data)
      })
      .catch((e) => console.log(e))
  }, [])

  if (adminUser.length === 0) {
    navigate("/")
    return
  }

  return (
    <div className="grid-container">
      {/* <Header OpenSidebar={OpenSidebar} /> */}
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <AdminRoutes />

      {/* <Header OpenSidebar={OpenSidebar}/> */}
      {/* //       <Home /> */}
      {/* //       <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> */}
    </div>
  )
}

export default Admin
