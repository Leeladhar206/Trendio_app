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


import { useState } from 'react';
import './Admin.css';
import Header from './Admin/Header';
import Sidebar from './Admin/Sidebar';
import { AdminRoutes } from './Admin/AdminRoutes';
import { Route, useParams } from 'react-router-dom';
import Home from './Admin/Home';
import AddProduct from './Admin/AddProduct';

function Admin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }

  return (
    <div className='grid-container'>

      {/* <Header OpenSidebar={OpenSidebar} /> */}
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <AdminRoutes />

      {/* <Header OpenSidebar={OpenSidebar}/> */}
{/* //       <Home /> */}
{/* //       <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> */}
      

    </div>
  );
}

export default Admin;
