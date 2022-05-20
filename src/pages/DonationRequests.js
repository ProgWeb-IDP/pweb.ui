import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import {Button, ButtonToolbar} from 'react-bootstrap';

class DonationRequests extends Component {
    constructor(props) {
        super(props)
        this.state={donationRequests:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API + 'requestfordonations')
        .then(response => response.json())
        .then(data => {
            this.setState({donationRequests:data})
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {

        const {donationRequests}=this.state;
        return (
            <div className='donation_requests2'>
                <div>
                    <Table className="mt-4" striped border hover size="sm">
                            <tr>
                                <th>Donation request id</th>
                                <th>Volunteer first name</th>
                                <th>Volunteer last name</th>
                                <th>Resource type</th>
                                <th>Emission date</th>
                                <th>Options</th>
                            </tr>
                        <tbody>
                            {
                                donationRequests.map(dr =>
                                    <tr>
                                        <td>{dr.donationRequestId}</td>
                                        <td>{dr.firstName}</td>
                                        <td>{dr.lastName}</td>
                                        <td>{dr.resourceType}</td>
                                        <td>{dr.emissionDate}</td>
                                        <td>
                                        <Button className="mr-2" variant="info" size="sm" onClick={() =><Link to={'/view_donation_request/' + dr.donationRequestId}></Link> }>
                                        <Link to={'/view_donation_request/' + dr.donationRequestId}>View details</Link>
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
    }
}

export default DonationRequests;
