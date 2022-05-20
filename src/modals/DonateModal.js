import React, {Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class DonateModal extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.request_id = this.props.request_id;
        this.account = null;
        const {user} = this.props.auth0;
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
        this.max_donation = this.props.max_donation;
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.account[0])
        if(event.target.quantity.value < 1)
        {
            alert("Your donation must be greater than 0!");
        }
        else if(event.target.quantity.value > this.max_donation)
        {
            alert("Your donation is greater than the maximum donation!");
        }
        else if(!this.account[0].country || !this.account[0].city || !this.account[0].address || !this.account[0].street)
        {
            alert("Please set your address before donating!");
        }
        else{
        fetch(process.env.REACT_APP_API + 'userdonations', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: this.account[0].userId,
                quantityDonated: event.target.quantity.value,
                donationRequestId: this.request_id,
                donationStatus: 1
            })
        })
        .then(result => result.json());
        this.props.onHide();
        alert("Thank you for your donation!");
        window.location = "/donate";
        }
        
    }

    render() {
        return (
            <div className="container">
                <Modal 
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Donation
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="quantity">
                                        <Form.Label>Quantity - MAX. QUANTITY: {this.max_donation}</Form.Label>
                                        <Form.Control type="text" name="quantity" required placeholder="Quantity"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Donate
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default withAuth0(DonateModal);