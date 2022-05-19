import React, {Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class CreateDonationRequestModal extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
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
    }

    handleSubmit(event) {
        event.preventDefault();
        
        fetch(process.env.REACT_APP_API + 'requestfordonations', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                volunteerId: this.account[0].userId,
                resourceType:event.target.resourceType.value,
                quantityNeeded:event.target.quantityNeeded.value,
                shortDescription:event.target.shortDescription.value
            })
        })
        .then(result => result.json());
        this.props.onHide();
        
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
                            Create new donation request
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="resourceType">
                                        <Form.Label>Resource type</Form.Label>
                                        <Form.Control type="text" name="resourceType" required placeholder="Resource type"/>
                                    </Form.Group>
                                    <Form.Group controlId="quantityNeeded">
                                        <Form.Label>Quantity needed</Form.Label>
                                        <Form.Control type="text" name="quantityNeeded" required placeholder="Quantity needed"/>
                                    </Form.Group> 
                                    <Form.Group controlId="shortDescription">
                                        <Form.Label>Short description</Form.Label>
                                        <Form.Control type="text" name="shortDescription" required placeholder="Short description"/>
                                    </Form.Group>        
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Create request
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
export default withAuth0(CreateDonationRequestModal);