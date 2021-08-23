import React from 'react'
import logo from '../../img/logo.png'
import './Header.css'
import {Link } from "react-router-dom";

const Header = () => {
    return (<div className="header">
                <header className="d-flex px-5 pt-5">
                    <div className="logoOptions" >
                    <Link to="/characters">
                <img src={logo} alt='logo' height="70"/>
                </Link>
                </div>
                <ul class="snip1189">
                        <Link className="current" to="/characters">Characters</Link>
                        <Link to="/episodes">Episodes</Link>
                        <Link to="/quotes">Quotes</Link>
                        <Link to="/deaths">Death</Link>      
                    </ul>
                </header>
                <hr className="hr-trick"/>
            </div>   
    )
}
export default Header
