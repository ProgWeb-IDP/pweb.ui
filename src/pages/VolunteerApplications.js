import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap';

class VolunteerApplications extends Component {
    constructor(props) {
        super(props)
        this.state={volunteerApplications:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API + 'volunteerApplication')
        .then(response => response.json())
        .then(data => {
            this.setState({volunteerApplications:data})
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    showApplication(applicationId) {
        <Link to={'/view_volunteer_app/' + applicationId}></Link>
    }
    render() {

        const {volunteerApplications}=this.state;
        let flag = volunteerApplications.length;
        return (
            (flag === 0) ? (<div className='volunteer_applications'><h2>THERE ARE 0 APPLICATIONS!</h2></div>) : (
                <div className='volunteer_applications'>
                    <div>
                    <h2>{volunteerApplications.length} {(volunteerApplications.length === 1) ? ("Application") : ("Applications")}</h2>
                        <Table className="mt-4" striped border hover size="sm">
                                <tr>
                                    <th>Application ID</th>
                                    <th>User first name</th>
                                    <th>User last name</th>
                                    <th>Options</th>
                                </tr>
                            <tbody>
                                {
                                    volunteerApplications.map(app =>
                                        <tr>
                                            <td>{app.applicationId}</td>
                                            <td>{app.firstName}</td>
                                            <td>{app.lastName}</td>
                                            <td>

                                            <Button className="mr-2" variant="primary" size="sm" onClick={() =><Link to={'/view_volunteer_app/' + app.applicationId}></Link> }>
                                            <Link style={{ textDecoration: 'none', color: 'white' }} to={'/view_volunteer_app/' + app.applicationId}>View details</Link>
                                            </Button>

                                            </td>
                                        </tr>
                                        )
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            )
        );
    }
}

export default VolunteerApplications;