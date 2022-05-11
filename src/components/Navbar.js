import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Navbar.css';
import { IconContext } from 'react-icons';
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from "react-avatar";

function Navbar() {
    const { logout, user } = useAuth0();

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <div className="logo">
                </div>
                <div className="userInfo">
                    <Avatar name={user.nickname} round="100px" size="50px" />   
                    <div className="signOut_button">
                    <Link style={{textDecoration: 'none'}}
                        to="/"
                        onClick={() => {
                        logout({ returnTo: window.location.origin });
                        }}
                    >
                    <font face="Verdana" color="white">
                    SIGN OUT
                    </font>
                    </Link>
                    </div>
                </div>
            </div>
            <nav className='nav-menu'>
                <ul className='nav-menu-items'>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar