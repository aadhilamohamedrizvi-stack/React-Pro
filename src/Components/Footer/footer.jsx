import React from "react";
import './footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram.png'
import printress_icon from '../Assets/printress.png'
import whatsapp_icon from '../Assets/whatsapp.png'


const Footer = () => {
    return (
        <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Doara Shop</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Officers</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
       <div className="footer-icons-container">
        <img src={instagram_icon} alt="" />
       </div>
       <div className="footer-icons-container">
        <img src={printress_icon} alt="" />
       </div>
       <div className="footer-icons-container">
        <img src={whatsapp_icon} alt="" />
       </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p></p>
      </div>
        </div>
    )
}
export default Footer;