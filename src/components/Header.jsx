import React from 'react';
import "./Header.css"
import logo from "../images/logo.jpg";

function Header(){
    return(
        <div className='header-container'>
            <div className='logo-container'>
                <img className='logo' src={logo} alt="SRM RMP Logo"></img>
            </div>
            <ul className='header'>
                <li><a className='link general gap' href="https://srmrmp.edu.in/about-srm/srm-in-focus/">About Us</a></li>
                <li><a className='link general gap' href="https://srmrmp.edu.in/about-srm/contact-us/">Contact Us</a></li>
                <li className='gap'>
                    <div className='register'>
                        <div><a className='link signin' href="#">Sign In</a></div>
                        <div className='vr-line'></div>
                        <div><a className='link login' href="#">Log In</a></div>
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default Header;

