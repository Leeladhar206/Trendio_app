import { useState } from 'react'
import './Admin.css'
import Header from './Admin/Header'
import Sidebar from './Admin/Sidebar'
import Home from './Admin/Home'

function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      {/* <Header OpenSidebar={OpenSidebar}/> */}
      <Home />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      
    </div>
  )
}

export default Admin