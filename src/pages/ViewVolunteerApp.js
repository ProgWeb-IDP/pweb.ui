import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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
        console.log("approve:" + this.app_id)
        const {application} = this.state;
        fetch(process.env.REACT_APP_API + 'volunteerapplication', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                applicationId: application[0].applicationId,
                userId: application[0].userId,
                applicationStatus: 2,
                roleId: application[0].roleId,
                locationId: application[0].locationId,
                summary: application[0].summary
            })
        })
        .then(result => result.json())
        // .then((result) => {
        //     alert(result);
        // },
        // (error) => {
        //     alert("Failed to update volunteer application");
        // })
    }

    Decline(){
        console.log("decline:" + this.app_id)
        const {application} = this.state;
        fetch(process.env.REACT_APP_API + 'volunteerapplication', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                applicationId: application[0].applicationId,
                userId: application[0].userId,
                applicationStatus: 0,
                roleId: application[0].roleId,
                locationId: application[0].locationId,
                summary: application[0].summary
            })
        })
        .then(result => result.json())
        // .then((result) => {
        //     alert(result);
        // },
        // (error) => {
        //     alert("Failed to update volunteer application");
        // })
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
                                    <td>{app.roleName}</td>
                                </tr>
                                <tr>
                                    <th>Location</th>
                                    <td>{app.locationName}</td>
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
                                        <Link to='/volunteer_applications'>
                                            Approve
                                        </Link>
                                        </Button>
                                            
                                        <Button className="mr-2" variant="info" size="sm" onClick={() => this.Decline()}>
                                        <Link to='/volunteer_applications'>
                                            Decline
                                        </Link>
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