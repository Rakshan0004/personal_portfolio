import React from "react";
import "../styles.css";
import {Link} from "react-scroll";
import contactimg from "../assets/contact.png";
import menuimg from "../assets/menu.png"
import { useState } from "react";

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  

    return (
      <nav className="navbar">
        <h1>Portfolio</h1>
        <div className="main-menu">
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="main-menu-item">Home</Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500} className="main-menu-item">About</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="main-menu-item">Skills</Link>
        {/* <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-100} duration={500} className="main-menu-item">Experience</Link> */}
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500} className="main-menu-item">Projects</Link>
        
        <Link activeClass="active" to="education" spy={true} smooth={true} offset={-100} duration={500} className="main-menu-item">Education</Link>
        </div>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500}><button className="contact-btn"><img src={contactimg} alt="Contact Me" className="contact-btn-img"/>Contact Me</button></Link>

        <img src={menuimg} alt="Menu" className="mobile-menu-img" onClick={()=>setShowMenu(!showMenu)} />
        <div className="mobile-menu" style={{display: showMenu ? "flex": "none"}}>
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="mob-list-item" onClick={()=>setShowMenu(!false)}>Home</Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={500} className="mob-list-item" onClick={()=>setShowMenu(!false)}>About</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="mob-list-item" onClick={()=>setShowMenu(!false)}>Skills</Link>
        {/* <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-100} duration={500} className="mob-list-item" onClick={()=>setShowMenu(!false)}>Experience</Link> */}
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500} className="mob-list-item" onClick={()=>setShowMenu(!false)}>Projects</Link>

        <Link activeClass="active" to="education" spy={true} smooth={true} offset={-100} duration={500} className="mob-list-item" onClick={()=>setShowMenu(!false)}>Education</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className="mob-list-item" onClick={()=>setShowMenu(!false)}>Contact Me</Link>
        </div>
        

      </nav>
    );
  }
  
  export default Navbar;