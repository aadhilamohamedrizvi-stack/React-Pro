import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import cart from '../Assets/cart.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("Shop");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Dora Shop Logo" />
                <p>Dora Shop</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("Shop") }}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="Men"?<h/>:<></>}</li>
                <li onClick={() => { setMenu("Mens") }}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="Men"?<h/>:<></>}</li>
                <li onClick={() => { setMenu("Womens") }}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link>{menu==="Women"?<h/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart} alt="Shopping Cart" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar;