import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Navbar.css';
import { IconContext } from 'react-icons';
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from "react-avatar";

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    const { logout, user } = useAuth0();

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <div className="logo">
                </div>
                <div className="userInfo">
                    <Avatar name={user.nickname} round="100px" size="50px" />   
                    <Link
                        to="/"
                        onClick={() => {
                        logout({ returnTo: window.location.origin });
                        }}
                    >
                    Sign out
                    </Link>
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