import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import CreateDonationRequestModal from '../modals/CreateDonationRequestModal';
import { withAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom'

class MyDonationRequests extends Component {
    constructor(props) {
        super(props)
        this.state={donationRequests:[], createModalShow: false}
        const {user} = this.props.auth0;
        this.account = null;
        fetch(process.env.REACT_APP_API + 'auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                authToken: user.sub
            })
        })
        .then(result => result.json())
        .then((result) => {
            this.account = result;
            console.log(this.account);
        });
        setTimeout(() => this.refreshList(), 200);
    }

    refreshList(){
        if(this.account != null)
        {
            fetch(process.env.REACT_APP_API + 'volunteer/' + this.account[0].userId) 
            .then(response => response.json())
            .then(data => {
                this.setState({donationRequests:data})
            });
        }
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {

        const {donationRequests}=this.state;
        console.log(donationRequests);
        let createModalClose=() => this.setState({createModalShow:false});
        return (
            <div className='my_donation_requests'>
                <div>
                    <Table className="mt-4" striped border hover size="sm">
                            <tr>
                                <th>Request ID</th>
                                <th>Resource type</th>
                                <th>Quantity gathered</th>
                                <th>Quantity needed</th>
                                <th>Emission date</th>
                                <th>Status</th>
                                <th>Options</th>
                            </tr>
                        <tbody>
                            {
                                donationRequests.map(dr =>
                                    <tr>
                                        <td>{dr.donationRequestId}</td>
                                        <td>{dr.resourceType}</td>
                                        <td>{dr.quantityGathered}</td>
                                        <td>{dr.quantityNeeded}</td>
                                        <td>{dr.emissionDate}</td>
                                        <td>{(dr.requestStatus == 1 ? "Waiting for approval" :(dr.requestStatus == 0 ? "Declined" : (dr.requestStatus == 2 ? "Active" : "Goal achieved")))}</td>
                                        <td>
                                            <Button className="mr-2" variant="info" size="sm" onClick={() =><Link to={'/volunteer_view_donation_request/' + dr.donationRequestId}></Link> }>
                                            <Link to={'/volunteer_view_donation_request/' + dr.donationRequestId}>View details</Link>
                                            </Button>
                                        </td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </Table>
                    <ButtonToolbar>
                        <Button variant='primary' onClick={() => this.setState({createModalShow:true})}>
                             Create new donation request
                        </Button>
                        <CreateDonationRequestModal show={this.state.createModalShow} onHide={createModalClose}/>
                    </ButtonToolbar>
                </div>
            </div>
        );
    }
}

export default withAuth0(MyDonationRequests);