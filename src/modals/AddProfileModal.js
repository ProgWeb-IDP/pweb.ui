import React, {Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";
import { withAuth0 } from '@auth0/auth0-react';

class AddProfileModal extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        
        const {user} = this.props.auth0;
        event.target.authToken = user.sub

        fetch(process.env.REACT_APP_API + 'users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                authToken: event.target.authToken,
                firstName:event.target.firstName.value,
                lastName:event.target.lastName.value,
                birthDate:event.target.birthDate.value,
                gender:event.target.gender.value,
                phoneNumber:event.target.phoneNumber.value,
                country:event.target.country.value,
                city:event.target.city.value,
                street:event.target.street.value,
                address:event.target.address.value,
                zipCode:event.target.zipCode.value
            })
        })
        .then(result => result.json())
        .then((result) => {
            alert(result);
        },
        (error) => {
            alert("Failed to add a profile details.");
        })
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
                            Configure profile details
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="firstName">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control type="text" name="firstName" required placeholder="first name"/>
                                    </Form.Group>
                                    <Form.Group controlId="lastName">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control type="text" name="lastName" required placeholder="last name"/>
                                    </Form.Group>
                                    <Form.Group controlId="birthDate">
                                        <Form.Label>birthDate</Form.Label>
                                        <Form.Control type="text" name="birthDate" required placeholder="birth date (eg: 19.12.1998)"/>
                                    </Form.Group>
                                    <Form.Group controlId="gender">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control type="text" name="gender" required placeholder="Gender (M or F)"/>
                                    </Form.Group>
                                    <Form.Group controlId="phoneNumber">
                                        <Form.Label>Phone number</Form.Label>
                                        <Form.Control type="text" name="phoneNumber" required placeholder="Phone number"/>
                                    </Form.Group>
                                    <Form.Group controlId="country">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control type="text" name="country" required placeholder="country"/>
                                    </Form.Group>
                                    <Form.Group controlId="city">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" name="city" required placeholder="city"/>
                                    </Form.Group>
                                    <Form.Group controlId="street">
                                        <Form.Label>Street</Form.Label>
                                        <Form.Control type="text" name="street" required placeholder="Street"/>
                                    </Form.Group>
                                    <Form.Group controlId="address">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" name="address" required placeholder="Address (Building number etc)"/>
                                    </Form.Group>
                                    <Form.Group controlId="zipCode">
                                        <Form.Label>ZIP code</Form.Label>
                                        <Form.Control type="text" name="zipCode" required placeholder="ZIP code"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Configure profile
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

export default withAuth0(AddProfileModal);