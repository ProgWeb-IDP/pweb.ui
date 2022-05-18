import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {CreateDonationRequestModal} from '../modals/CreateDonationRequestModal';

class MyDonationRequests extends Component {
    constructor(props) {
        super(props)
        this.state={donationRequests:[], createModalShow: false}
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
                                        <td>{dr.status}</td>
                                        <td>View details</td>
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

export default MyDonationRequests;