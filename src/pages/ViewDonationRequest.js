import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';

class ViewDonationRequest extends Component {
    constructor(props) {
        super(props)
        this.state={donationRequest:[]}
        const path = window.location.pathname;
        this.request_id = parseInt(path.replace("/view_donation_request/", ''));
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

    Approve(){
        const {donationRequest} = this.state;

        fetch(process.env.REACT_APP_API + 'requestfordonations', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                donationRequestId: donationRequest[0].donationRequestId,
                volunteerId: donationRequest[0].volunteerId,
                requestStatus: 2,
                resourceType: donationRequest[0].resourceType,
                quantityNeeded: donationRequest[0].quantityNeeded,
                shortDescription: donationRequest[0].shortDescription,
                emissionDate: donationRequest[0].emissionDate,
                processingDate: donationRequest[0].processingDate,
                completionDate: donationRequest[0].completionDate
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
        const {donationRequest} = this.state;
        fetch(process.env.REACT_APP_API + 'requestfordonations', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                donationRequestId: donationRequest[0].donationRequestId,
                volunteerId: donationRequest[0].volunteerId,
                requestStatus: 0,
                resourceType: donationRequest[0].resourceType,
                quantityNeeded: donationRequest[0].quantityNeeded,
                shortDescription: donationRequest[0].shortDescription,
                emissionDate: donationRequest[0].emissionDate,
                processingDate: donationRequest[0].processingDate,
                completionDate: donationRequest[0].completionDate
            })
        })
        //.then(result => result.json())
        // .then((result) => {
        //     alert(result);
        // },
        // (error) => {
        //     alert("Failed to update volunteer application");
        // })
    }

    render() {
        const {donationRequest}=this.state;
        return (
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
                                    <th>Short description</th>
                                    <td>{dr.shortDescription}</td>
                                </tr>
                                <tr>
                                    <th>Emission date</th>
                                    <td>{dr.emissionDate.substring(0, 10)}</td>
                                </tr>
                                 <tr>
                                    <th>Options</th>
                                    <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="success" size="sm" onClick={() => this.Approve()}>
                                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/donation_requests'>
                                            Approve
                                        </Link>
                                        </Button>
                                            
                                        <Button className="mr-2" variant="danger" size="sm" onClick={() => this.Decline()}>
                                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/donation_requests'>
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
                        <Button variant='primary' onClick={() => null}>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to='/donation_requests'>
                            BACK
                        </Link>
                        </Button>
                </ButtonToolbar>
            </div>
        );
    }
}

export default ViewDonationRequest;