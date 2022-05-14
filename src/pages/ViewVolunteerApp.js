import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { browserHistory } from "react-router";


class ViewVolunteerApp extends Component {
    constructor(props) {
        super(props)
        this.state={application:[]}
        const path = window.location.pathname;
        this.app_id = parseInt(path.replace("/view_volunteer_app/", ''));
    }

    refreshList(){
        fetch(process.env.REACT_APP_API + 'volunteerapplication/' + this.app_id)
         .then(response => response.json())
         .then(data => {
             this.setState({application:data})
         });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    Approve(){
        //apel la backend
        console.log("approve")
    }

    Decline(){
        //apel la backend
        console.log("decline")
    }

    render() {
        const {application}=this.state;
        return (
            <div className='view_volunteer_app'>
                <Link to='/volunteer_applications'>
                    BACK
                </Link>
                <br/>
                {
                    application.map(app =>
                    <div>
                        <br />
                        First name: {app.firstName}
                        <br />
                        Last name: {app.lastName}
                        <br />
                        Role: {app.role}
                        <br />
                        Summary: {app.summary}
                        <br />
                    </div>
                    )
                }
                <Link onClick={this.Approve} to='/volunteer_applications'>
                    APPROVE
                </Link>

                <Link onClick={this.Decline} to='/volunteer_applications'>
                    DECLINE
                </Link>
            </div>
        );
    }
}

export default ViewVolunteerApp;