import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { browserHistory } from "react-router";
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';

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
                <Table className="mt-4" striped border hover size="sm">
                <tbody>
                    {
                        application.map(app =>
                            <div>
                                <tr>
                                    <th>First name</th>
                                    <td>{app.firstName}</td>
                                </tr>
                                <tr>
                                    <th>Last name</th>
                                    <td>{app.lastName}</td>
                                </tr>
                                <tr>
                                    <th>Role</th>
                                    <td>{app.role}</td>
                                </tr>
                                <tr>
                                    <th>Summary</th>
                                    <td>{app.summary}</td>
                                </tr>
                                 <tr>
                                    <th>Options</th>
                                    <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="success" size="sm" onClick={() => this.Approve()}>
                                            Approve
                                        </Button>
                                            
                                        <Button className="mr-2" variant="info" size="sm" onClick={() => this.Decline()}>
                                            Decline
                                        </Button>
                                    </ButtonToolbar>
                                    </td>
                                </tr>
                            </div>
                        )
                    }
                </tbody>
                </Table>
                <ButtonToolbar>
                        <Button variant='dark' onClick={() => null}>
                        <Link to='/volunteer_applications'>
                            BACK
                        </Link>
                        </Button>
                </ButtonToolbar>
            </div>
        );
    }
}

export default ViewVolunteerApp;

/*
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { browserHistory } from "react-router";
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';

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
                <Table className="mt-4" striped border hover size="sm">
                <tbody>
                {
                    application.map(app => {
                        <div>
                            <tr>
                                <th>First name</th>
                                <td>{app.firstName}</td>
                            </tr>
                            <tr>
                                <th>Last name</th>
                                <td>{app.lastName}</td>
                            </tr>
                            <tr>
                                <th>Role</th>
                                <td>{app.role}</td>
                            </tr>
                            <tr>
                                <th>Summary</th>
                                <td>{app.summary}</td>
                            </tr>
                            {/* <tr>
                                <th>Options</th>
                                <td>
                                <ButtonToolbar>
                                    <Button className="mr-2" variant="success" size="sm" onClick={() => null}>
                                        Approve
                                    </Button>
                                        
                                    <Button className="mr-2" variant="info" size="sm" onClick={() => null}>
                                        Decline
                                    </Button>
                                </ButtonToolbar>
                                </td>
                            </tr> }
                        </div>
                    })
                }
                </tbody>
             </Table>

             <Link to='/volunteer_applications'>
                BACK
            </Link>
        </div>
    );
}
}

export default ViewVolunteerApp;


*/