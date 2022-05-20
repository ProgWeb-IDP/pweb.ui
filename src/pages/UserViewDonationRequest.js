import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import DonateModal from '../modals/DonateModal';

class ViewDonationRequest extends Component {
    constructor(props) {
        super(props)
        this.state={donationRequest:[], donateModalShow: false}
        const path = window.location.pathname;
        this.request_id = parseInt(path.replace("/user_view_donation_request/", ''));
    }

    refreshList(){
        fetch(process.env.REACT_APP_API + 'donate/' + this.request_id)
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

    Donate(){

    }

    render() {
        const {donationRequest}=this.state;
        let donateModalClose=() => this.setState({donateModalShow:false});
        return (
            <div className='view_donation_request'>
                <Table className="mt-4" striped border hover size="sm">
                <tbody>
                    {
                        donationRequest.map(dr =>
                            <div>
                                <tr>
                                    <th>Resource type</th>
                                    <td>{dr.resourceType}</td>
                                </tr>
                                <tr>
                                    <th>Quantity gathered</th>
                                    <td>{dr.quantityGathered} / {dr.quantityNeeded}</td>
                                </tr>
                                <tr>
                                    <th>Short description</th>
                                    <td>{dr.shortDescription}</td>
                                </tr>
                                 <tr>
                                    <th>Options</th>
                                    <td>
                                    <ButtonToolbar>
                                        <Button variant='success' onClick={() => this.setState({donateModalShow:true})}>
                                            Donate
                                        </Button>
                                        <DonateModal max_donation={dr.quantityNeeded - dr.quantityGathered} request_id={this.request_id} show={this.state.donateModalShow} onHide={donateModalClose}/>
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
                        <Link to='/donate'>
                            BACK
                        </Link>
                        </Button>
                </ButtonToolbar>
            </div>
        );
    }
}

export default ViewDonationRequest;