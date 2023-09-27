import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import styled from "styled-components";




const Navbar = () => {
//   const [open,setOpen] = useState(false)
//   const products = useSelector((state) => state.cart.products);

  return (
    <DIV className="navbar">
      <div className="wrapper">
        <div className="left">
        <Link className ="link" to="/"><img className="image" src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/kq35se87ck089gx02u4t.png" alt="" /></Link>
        </div>
        <div className="center">
        <div className="item">
            <Link className ="link" to="/men">MEN</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/women">WOMEN</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/accessories">ACCESSORIES</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/about">ABOUT</Link>
          </div>
         
        </div>
        <div className="right">
          <div className="icons">
            <SearchIcon/>
            <Link className ="link" to="/login">  <PersonOutlineOutlinedIcon/></Link>
          
            <Link className ="link" to="/wishlist"> <FavoriteBorderOutlinedIcon/></Link>
           
            {/* <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <span>{products.length}</span>
            </div> */}
            <Link className ="link" to="/cart">  <ShoppingCartOutlinedIcon/> </Link>
            
             
          </div>
        </div>
      </div>
      {/* {open && <Cart/>} */}
    </DIV>
  );
};

export default Navbar;

const DIV= styled.div`
    display:flex;
    /* background-color:yellow; */

    .wrapper{
        display: flex;
        width:100%;
        gap:25px;
        justify-content:space-around;
        align-items:center;
    }

    .left{
        display: flex;
        gap:25px;
    }
    .image{
        width:100px;
        margin:10px;
    }
  
    .center{
        display: flex;
        gap:25px;
    }
    .right{
        display: flex;
        gap:35px;
    }
    .icons{
        display:flex;
        gap:20px;
        
    }

`


