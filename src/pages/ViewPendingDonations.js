import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import {Button, ButtonToolbar} from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class ViewPendingDonations extends Component {
    constructor(props) {
        super(props)
        this.state={pendingDonations:[]}
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
        });
        setTimeout(() => this.refreshList(), 200);
    }

    refreshList(){
        if(this.account != null)
        {
            fetch(process.env.REACT_APP_API + 'userdonations')
            .then(response => response.json())
            .then(data => {
                this.setState({pendingDonations:data})
            });
        }
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    UpdateDonation(donation_id, new_status){
        const {pendingDonations} = this.state;
        let donation;
        pendingDonations.filter(filter_pd => filter_pd.donationId === donation_id).
        map(pd =>{
            donation = pd;
        });

        fetch(process.env.REACT_APP_API + 'userdonations', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                donationId: donation.donationId,
                userId: donation.userId,
                volunteerId: this.account[0].userId,
                quantityDonated: donation.quantityDonated,
                donationRequestId: donation.donationRequestId,
                emissionDate: donation.emissionDate,
                collectionDate: donation.collectionDate,
                completionDate: donation.completionDate,
                donationStatus: new_status
            })
        });
    }

    render() {
        const {pendingDonations}=this.state;
        let pendingDonationsFlag =  pendingDonations
                                        .filter(filter_pd => filter_pd.donationStatus === 1)
                                        .length
        let acceptedDonationsFlag = pendingDonations
                                        .filter(filter_pd2 => filter_pd2.volunteerId === this.account[0].userId)
                                        .filter(filter_pd => filter_pd.donationStatus === 2)
                                        .length
        let donationsCollected =  pendingDonations
                                        .filter(filter_pd2 => filter_pd2.volunteerId === this.account[0].userId)
                                        .filter(filter_pd => filter_pd.donationStatus === 3)
                                        .length
        return (
            <div className='volunteer_applications'>
                <div>
                    <h2>PENDING DONATIONS</h2>
                    {(pendingDonationsFlag === 0) ? (<h2>There are no pending donations</h2>) : (
                        <Table className="mt-4" striped border hover size="sm">
                                <tr>
                                    <th>Donation ID</th>
                                    <th>Request ID</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Resource</th>
                                    <th>Emission date</th>
                                    <th>Address</th>
                                    <th>Options</th>
                                </tr>
                            <tbody>
                                {
                                    pendingDonations.filter(filter_pd => filter_pd.donationStatus === 1).map(pd =>
                                        <tr>
                                            <td>{pd.donationId}</td>
                                            <td>{pd.donationRequestId}</td>
                                            <td>{pd.firstName} {pd.lastName}</td>
                                            <td>{pd.quantityDonated}</td>
                                            <td>{pd.resourceType}</td>
                                            <td>{pd.emissionDate}</td>
                                            <td>{pd.country}, {pd.city}, {pd.street}, {pd.address}</td>

                                            <td>

                                            <ButtonToolbar>
                                            <Button className="mr-2" variant="success" size="sm" onClick={() => this.UpdateDonation(pd.donationId, 2)}>
                                                Accept
                                            </Button>
                                                
                                            <Button className="mr-2" variant="danger" size="sm" onClick={() => this.UpdateDonation(pd.donationId, 0)}>
                                                Decline
                                            </Button>
                                            </ButtonToolbar>

                                            </td>
                                        </tr>
                                        )
                                }
                            </tbody>
                        </Table>
                    )}
                    <h2>DONATIONS YOU ACCEPTED</h2>
                    {(acceptedDonationsFlag === 0) ? (<h2>There are no donations accepted</h2>) : (
                        <Table className="mt-4" striped border hover size="sm">
                                <tr>
                                    <th>Donation ID</th>
                                    <th>Request ID</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Resource</th>
                                    <th>Emission date</th>
                                    <th>Address</th>
                                    <th>Options</th>
                                </tr>
                            <tbody>
                                {
                                    pendingDonations.filter(filter_pd2 => filter_pd2.volunteerId === this.account[0].userId)
                                                    .filter(filter_pd => filter_pd.donationStatus === 2)
                                                    .map(pd =>
                                        <tr>
                                            <td>{pd.donationId}</td>
                                            <td>{pd.donationRequestId}</td>
                                            <td>{pd.firstName} {pd.lastName}</td>
                                            <td>{pd.quantityDonated}</td>
                                            <td>{pd.resourceType}</td>
                                            <td>{pd.emissionDate}</td>
                                            <td>{pd.country}, {pd.city}, {pd.street}, {pd.address}</td>

                                            <td>

                                            <ButtonToolbar>
                                            <Button className="mr-2" variant="success" size="sm" onClick={() => this.UpdateDonation(pd.donationId, 3)}>
                                                Collect
                                            </Button>
                                                
                                            <Button className="mr-2" variant="danger" size="sm" onClick={() => this.UpdateDonation(pd.donationId, 0)}>
                                                Cancel
                                            </Button>
                                            </ButtonToolbar>

                                            </td>
                                        </tr>
                                        )
                                }
                            </tbody>
                        </Table>
                    )}
                    <h2>DONATIONS YOU COLLECTED</h2>
                    {(donationsCollected === 0) ? (<h2>There are no donations collected</h2>) : (
                        <Table className="mt-4" striped border hover size="sm">
                                <tr>
                                    <th>Donation ID</th>
                                    <th>Request ID</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Resource</th>
                                    <th>Collection date</th>
                                    <th>Options</th>
                                </tr>
                            <tbody>
                                {
                                    pendingDonations.filter(filter_pd2 => filter_pd2.volunteerId === this.account[0].userId)
                                                    .filter(filter_pd => filter_pd.donationStatus === 3)
                                                    .map(pd =>
                                        <tr>
                                            <td>{pd.donationId}</td>
                                            <td>{pd.donationRequestId}</td>
                                            <td>{pd.firstName} {pd.lastName}</td>
                                            <td>{pd.quantityDonated}</td>
                                            <td>{pd.resourceType}</td>
                                            <td>{pd.collectionDate}</td>

                                            <td>

                                            <ButtonToolbar>
                                            <Button className="mr-2" variant="success" size="sm" onClick={() => this.UpdateDonation(pd.donationId, 4)}>
                                                Deliver
                                            </Button>
                                            </ButtonToolbar>
                                            </td>
                                        </tr>
                                        )
                                }
                            </tbody>
                        </Table>
                    )}
                </div>
            </div>
        )
    }
}

export default withAuth0(ViewPendingDonations);