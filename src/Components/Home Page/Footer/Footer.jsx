import React from 'react';
import footerImage from '../../../assets/C002-assets/logo-footer.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-black text-white text-base-content rounded p-10">
                <div className='flex gap-2'>
                   <img src={footerImage} alt="" /> <p className='text-3xl font-bold'>Law.BD</p>
                </div>
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">Home</a>
    <a className="link link-hover">My Bookings</a>
    <a className="link link-hover">Blogs</a>
    <a className="link link-hover">Contacts</a>
  </nav>

  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;