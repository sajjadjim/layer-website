import React from "react";
import footerImage from "../../../assets/C002-assets/logo-footer.png";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import "./Footer.css";
import { NavLink } from "react-router";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-horizontal footer-center bg-black text-white  rounded p-10">
        <div className="flex gap-2">
          <img src={footerImage} alt="" />{" "}
          <p className="text-3xl font-bold">Law.BD</p>
        </div>
        <nav className="grid grid-flow-col gap-4">
          <div className="navbar-center hidden lg:flex gap-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/bookingLayer">My Bookings</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </nav>
        <div className="flex gap-5">
          <a href="https://www.facebook.com/sajjad.hossain.jim" target="">
            <FaFacebook className="w-8 h-8 text-blue-800" />
          </a>
          <a href="https://www.github.com/sajjadjim" target="">
            <FaGithub className="w-8 h-8 " />
          </a>
          <a href="https://www.linkedin.com/in/sajjadjim/" target="">
            <BsLinkedin className="w-8 h-8  text-blue-800" />
          </a>
          <a href="https://www.youtube.com" target="">
            <IoLogoYoutube className="w-8 h-8  text-red-800" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
