import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { AdminSideBarData, VolunteerSideBarData, NormalUserSideBarData } from './SidebarData'
import './Navbar.css';
import { IconContext } from 'react-icons';
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
                        account.map(acc => (acc.authToken === token) ? ( /*Current user*/
                            (acc.isAdmin === 1) ? (/*Display admin menu*/
                                AdminSideBarData.map((item, index) => {
                                    return (
                                        <li key={index} className={item.cName}>
                                            <Link to={item.path}>
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    );
                                })
                            ) : (acc.isVolunteer === 1) ? ( /*Display volunteer menu*/
                                    VolunteerSideBarData.map((item, index) => {
                                        return (
                                            <li key={index} className={item.cName}>
                                                <Link to={item.path}>
                                                    {item.icon}
                                                    <span>{item.title}</span>
                                                </Link>
                                            </li>
                                        );
                                    })
                                ) :  (acc.isAdmin === 0 && acc.isVolunteer === 0) ? (/*Display normal user menu*/
                                    NormalUserSideBarData.map((item, index) => {
                                        return (
                                            <li key={index} className={item.cName}>
                                                <Link to={item.path}>
                                                    {item.icon}
                                                    <span>{item.title}</span>
                                                </Link>
                                            </li>
                                        );
                                    })
                                ) : null
                            ) :  null
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