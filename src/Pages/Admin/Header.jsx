import React from 'react';
import { BsJustify, BsSearch, BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle } from 'react-icons/bs';



function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left' style={{ display: "flex", alignItems: "center" }}>
        <BsSearch className='icon' />
        <input style={{width:"300px"}} type="text" placeholder="Search" />
      </div>
      <div className='header-right' >
        <div className='icon' style={{ display: "flex", alignItems: "center" , gap:"20px"}}>
          <BsFillBellFill />
          <BsFillEnvelopeFill />
          <BsPersonCircle />
        </div>
      </div>
    </header>
  );
}

export default Header;
