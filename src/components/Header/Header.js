import React, {useState} from 'react';
import './Header.css';
import {Link} from "react-scroll";
import SvgSmileBig from '../svgs/SmileBig';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


// import { Switch, Route, NavLink} from 'react-router-dom';

function Header(){

    const [activated, setActivated] = useState(true);

    const handleClick = () => {
        setActivated(!activated); 
    }


    // A major issue right now is that the header does not stay on the top of the page when scrolling
    return (
    <div id = "header">

        <div id = "logo"> <SvgSmileBig/>  </div>
        
        <nav>
            
            <ul className={`nav-links ${activated ? "nav-deactivate" : "nav-activated"}`} >
                <li> <Link to="#Home"> Home </Link> </li>
                <li> <Link to="AboutMe" smooth = {true} duration = {1000}> About </Link> </li>

                <li> <Link to="Portfolio" smooth = {true} duration = {1200}> Portfolio </Link> </li>
                <li> <Link to="Contact" smooth = {true} duration = {1300}> Contact </Link> </li>
            </ul>

            {/* The following wouild be only for the mobile view */}
            <div className="mobile" onClick = {handleClick}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

        </nav>
        

    </div>
    )
}

export default Header

