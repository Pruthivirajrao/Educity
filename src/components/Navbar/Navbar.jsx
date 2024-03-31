import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import logo from "../../images/logo.png";
import { Link } from 'react-scroll';
import menuIcon from "../../images/menu-icon.png"

const Navbar = () => {
  const [mobile,setMoblie] =useState(false)
  const toggleMenu =()=>{
    mobile?setMoblie(false):setMoblie(true)
  }

  const[sticky,setSticky]=useState(false)


  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY>700 ? setSticky(true):setSticky(false)
    })
  },[])


  return (
    <nav className={`container ${sticky?'dark-nav':''}`}>
        <img src={logo} alt="" className="logo"/>
        <ul className={mobile?"":"hide-mobile-menu"}>
            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to="about" smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to="testimonial" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Contact us</Link></li>
        </ul>
        <img src={menuIcon} onClick={toggleMenu} className="menu-icon" />
    </nav>
  )
}

export default Navbar;