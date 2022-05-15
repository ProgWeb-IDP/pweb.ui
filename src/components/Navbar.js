import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Navbar.css';
import { IconContext } from 'react-icons';
import { useAuth0 } from "@auth0/auth0-react";
import Avatar from "react-avatar";
import { withAuth0 } from '@auth0/auth0-react';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state={account:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API + 'users')
        .then(response => response.json())
        .then(data => {
            this.setState({account:data})
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }
    render() {
        const {user}=this.props.auth0;
        var token = user.sub;
        const {account}=this.state;

        return(
            <>
            <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <div className="logo"> </div>
                <div className="userInfo">
                    <Avatar name={user.nickname} round="100px" size="50px" />   
                </div>
            </div>
            <nav className='nav-menu'>
                <ul className='nav-menu-items'>
                    {
                        // SidebarData.map((item, index) => {
                        //     return (
                        //         account.map(acc => (acc.authToken === token) ?
                        //         (
                        //         (acc.isVolunteer == 1) ? (                                    <li key={index} className={item.cName}>
                        //             <Link to={item.path}>
                        //                 {item.icon}
                        //                 <span>{item.title}</span>
                        //             </Link>
                        //         </li>) : null
                        //         ) : null
                        //         )
                        //     );
                        // })
                        account.map(acc => (acc.authToken === token) ? (
                            (acc.isAdmin === 1) ? (
                                SidebarData.map((item, index) => {
                                    return (
                                        (index === 10 || index === 11 || index === 12 || index === 13) ? (
                                            null
                                        ) : (
                                        <li key={index} className={item.cName}>
                                            <Link to={item.path}>
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                        )
                                    );
                                })
                            ) : (acc.isVolunteer === 1) ? (
                                SidebarData.map((item, index) => {
                                    return (
                                        (index === 0 || index === 5 || index === 10 || index === 11 || index === 14) ? (
                                            <li key={index} className={item.cName}>
                                                <Link to={item.path}>
                                                    {item.icon}
                                                    <span>{item.title}</span>
                                                </Link>
                                            </li>
                                        ) : null
                                    );
                                })
                            ) : null
                            
                        ) : (acc.isAdmin === 0 && acc.isVolunteer === 0) ? (
                            SidebarData.map((item, index) => {
                                return (
                                    (index === 0 || index === 12 || index === 13|| index === 14) ? (
                                        <li key={index} className={item.cName}>
                                            <Link to={item.path}>
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    ) : null
                                );
                            })) : null
                        )
                    }
                </ul>
            </nav>
            </IconContext.Provider>
        </> 
        );
    }
}

export default withAuth0(Navbar);

/*

function Navbar() {
    const { logout, user } = useAuth0();
    console.log("Hello")
    console.log(user)
    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
            <div className="navbar">
                <div className="logo"> </div>
                <div className="userInfo">
                    <Avatar name={user.nickname} round="100px" size="50px" />   
                </div>
            </div>
            <nav className='nav-menu'>
                <ul className='nav-menu-items'>
                    {
                        SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
*/