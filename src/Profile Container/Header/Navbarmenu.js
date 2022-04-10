import React,{useState} from 'react';
import {FiAlignRight, FiXCircle } from "react-icons/fi";
import './Navbarmenu.css'
import { Link } from "react-scroll";

const Navbarmenu = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);

    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["menuq1"];

    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push(' ');
    }

    return (
        <div className="navbar-container">
            <div className='navbar-details'>
                <div className='site-title'>
                <Link
                    activeClass="active"
                    to="home-container"
                    spy={true}
                    offset={-70}
                    className='menu-item-name'
                >YazH</Link>
                </div>
            </div>
            
            <div className="menu-buttons">
                <nav className="main-nav" >
                    {isResponsiveclose === true ? <> 
                        <span className="menubar_button" style={{ display: '' }} onClick={toggleClass} > <FiXCircle /> </span>
                    </> : <>
                        <span className="menubar_button" style={{ display: '' }} onClick={toggleClass} > <FiAlignRight /> </span>
                    </>}
                    
                    <ul className={boxClass.join(' ')}>
                        <li className="menu-item" > <Link
                            activeClass="active"
                            to="home-container"
                            spy={true}
                            offset={-70}
                            className='menu-item-name'
                        >Home</Link> </li>

                        <li className="menu-item" > <Link
                            activeClass="active"
                            to="about-me-container"
                            spy={true}
                            offset={-50}
                            className='menu-item-name'
                        >About Me</Link> </li>

                        <li className="menu-item" > <Link
                            activeClass="active"
                            to="resume-cotainer"
                            spy={true}
                            onClick={toggleClass}
                            offset={-50}
                            className='menu-item-name'
                        >Resume</Link> </li>

                        <li className="menu-item" > <Link
                            activeClass="active"
                            to="contact-cotainer"
                            spy={true}
                            onClick={toggleClass}
                            className='menu-item-name'
                        >Contact Me</Link> </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default Navbarmenu;