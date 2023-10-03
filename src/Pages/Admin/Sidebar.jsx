import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CloseIcon } from "@chakra-ui/icons";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsBoxArrowRight,
} from "react-icons/bs";
import styled from "styled-components";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const navigate = useNavigate();

  // const handleLinkClick = (path) => {
  //   navigate(`/admin/${path}`);
  //   OpenSidebar();
  // };

  return (
    // <DIV>
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        {/* <div className='sidebar-brand' style={{ width: "130px" }}>
          <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2qh43n7ugsu0tylcf56h.png" alt="" />
        </div> */}
        <span className="icon close_icon" onClick={OpenSidebar}>
          <CloseIcon /> {/* Use Chakra UI CloseIcon */}
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item" onClick={()=> navigate("/admin/")}>
          <Link to="/admin/">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </Link>
        </li>
        <li className="sidebar-list-item"  onClick={()=> navigate("/admin/addProduct")}>
          <Link to="/admin/addProduct">
            <BsFillArchiveFill className="icon" /> Add New Products
          </Link>
        </li>
        <li className="sidebar-list-item" onClick={()=> navigate("/admin/editProduct")}>
          <Link to="/admin/editProduct">
            <BsFillGrid3X3GapFill className="icon" /> Edit Products
          </Link>
        </li>
        <li className="sidebar-list-item" onClick={()=> navigate("/admin/customers")} >
          <Link to="/admin/customers">
            <BsPeopleFill className="icon" /> Customers
          </Link>
        </li>
        {/* <li className="sidebar-list-item">
          <Link to="/admin/">
            <BsListCheck className="icon" /> Inventory
          </Link>
        </li> */}
        <li className="sidebar-list-item" onClick={()=> navigate("/admin/")}>
          <Link to="/admin/">
            <BsMenuButtonWideFill className="icon"  /> Reports
          </Link>
        </li>
        <li className="sidebar-list-item" onClick={()=> navigate("/admin/")}>
          <Link to="/admin/">
            <BsFillGearFill className="icon" /> Settings
          </Link>
        </li>
        {/* <li className="sidebar-list-item">
          <Link to="/admin/">
            <BsBoxArrowRight className="icon" /> Logout
          </Link>
        </li> */}
      </ul>
    </aside>
    // {/* </DIV> */}
  );
}

export default Sidebar;

// const DIV = styled.div`
//   position: fixed;
// `;
