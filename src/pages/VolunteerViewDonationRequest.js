import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';

class VolunteerViewDonationRequest extends Component {
    constructor(props) {
        super(props)
        this.state={donationRequest:[]}
        const path = window.location.pathname;
        this.request_id = parseInt(path.replace("/volunteer_view_donation_request/", ''));
    }

    refreshList(){
        fetch(process.env.REACT_APP_API + 'requestfordonations/' + this.request_id)
         .then(response => response.json())
         .then(data => {
             this.setState({donationRequest:data})
         });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const {donationRequest}=this.state;
        let flag = donationRequest.length;
        return (
            (flag === 0) ? (<div className='view_donation_request'><h2>There are 0 donation requests.</h2></div>) : (
                <div className='view_donation_request'>
                    <Table className="mt-4" striped border hover size="sm">
                    <tbody>
                        {
                            donationRequest.map(dr =>
                                <div>
                                    <tr>
                                        <th>Volunteer first name</th>
                                        <td>{dr.firstName}</td>
                                    </tr>
                                    <tr>
                                        <th>Volunteer last name</th>
                                        <td>{dr.lastName}</td>
                                    </tr>
                                    <tr>
                                        <th>Resource type</th>
                                        <td>{dr.resourceType}</td>
                                    </tr>
                                    <tr>
                                        <th>Quantity needed</th>
                                        <td>{dr.quantityNeeded}</td>
                                    </tr>
                                    <tr>
                                        <th>Quantity gathered</th>
                                        <td>{dr.quantityGathered}</td>
                                    </tr>
                                    <tr>
                                        <th>Short description</th>
                                        <td>{dr.shortDescription}</td>
                                    </tr>
                                    <tr>
                                        <th>Emission date</th>
                                        <td>{dr.emissionDate.substring(0, 10)}</td>
                                    </tr>
                                </div>
                            )
                        }
                    </tbody>
                    </Table>
                    <ButtonToolbar>
                            <Button variant='primary' onClick={() => null}>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to='/my_donation_requests'>
                                BACK
                            </Link>
                            </Button>
                    </ButtonToolbar>
                </div>
            )
        );
    }
}

export default VolunteerViewDonationRequest;