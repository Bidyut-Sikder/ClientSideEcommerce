import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../../contexts/ShopContext";

const Navbar = () => {
  const {getTotalCartItems}=useContext(ShopContext)
const [menu,setMenu]=useState('shop')




  return (
    <div className="navbar">

      <div className="nav-logo">
   
      <NavLink to='/' >
      <img src={logo} alt="" />
      </NavLink>
        <p>Shop</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>setMenu('shop')}> <NavLink to='/' > Shop</NavLink>    {menu==='shop'?<hr />:<></>} </li>
        <li onClick={()=>setMenu('men')}> <NavLink to='/men' > Men</NavLink>  {menu==='men'?<hr />:<></>}</li>
        <li onClick={()=>setMenu('women')}><NavLink to='/women' > Women</NavLink>  {menu==='women'?<hr />:<></>}</li>
        <li onClick={()=>setMenu('kids')}> <NavLink to='/kids' > Kids</NavLink>{menu==='kids'?<hr />:<></>}</li>
      </ul>
      <div className="nav-login-cart">
      <div className='containerStyle'>
      <input type="text" placeholder="Search..." className="inputStyle" />
      <Link to={'/searchresults'}> 
      <div type="submit" className="buttonStyle" >
        Search
      </div>
      </Link>
     
    </div>
      <NavLink to='/registration' > <button > Login</button></NavLink>
      <NavLink to='/cart' >  <img src={cart_icon} alt="" /></NavLink> 
     
      <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
