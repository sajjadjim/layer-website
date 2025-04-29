import React from 'react';
import { Link, NavLink } from 'react-router';
import  './NavBar.css'
import webLogo from '../../../assets/C002-assets/logo.png'
const NavaBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="text-xl flex text-semibold"><img className='w-8 h-8' src={webLogo} alt="" />Law.BD</a>
  </div>
  <div className="navbar-center hidden lg:flex gap-5">
    
       <NavLink to='/'>Home</NavLink>
       <NavLink to='/bookingLayer'>My Bookings</NavLink>
       <NavLink to='/blogs'>Blogs</NavLink>
       <NavLink to='/contact'>Contact</NavLink>
    
  </div>
  <div className="navbar-end">
    <a className="btn bg-green-600 px-4 py-1 text-white rounded-full">Contact Now</a>
  </div>
</div>
    );
};

export default NavaBar;