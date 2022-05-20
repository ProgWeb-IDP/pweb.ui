import React, {Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class AddProfileModal extends Component {
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
        
        const {user} = this.props.auth0;
        event.target.authToken = user.sub
        console.log(this.account)
        fetch(process.env.REACT_APP_API + 'users', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                authToken: event.target.authToken,
                firstName: (event.target.firstName.value ? (event.target.firstName.value) : (this.account[0].firstName)),
                lastName: (event.target.lastName.value ? (event.target.lastName.value) : (this.account[0].lastName)),
                birthDate: (event.target.birthDate.value ? (event.target.birthDate.value) : (this.account[0].birthDate)),
                gender: (event.target.gender.value ? (event.target.gender.value) : (this.account[0].gender)),
                phoneNumber: (event.target.phoneNumber.value ? (event.target.phoneNumber.value) : (this.account[0].phoneNumber)),
                country: (event.target.country.value ? (event.target.country.value) : (this.account[0].country)),
                city: (event.target.city.value ? (event.target.city.value) : (this.account[0].city)),
                street: (event.target.street.value ? (event.target.street.value) : (this.account[0].street)),
                address: (event.target.address.value ? (event.target.address.value) : (this.account[0].address)),
                zipCode: (event.target.zipCode.value ? (event.target.zipCode.value) : (this.account[0].zipCode)),
            })
        })
        .then(result => result.json())
        .then((result) => {
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
            this.props.onHide();
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
                                        <Form.Control type="text" name="firstName" placeholder="first name" />
                                    </Form.Group>
                                    <Form.Group controlId="lastName">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control type="text" name="lastName" placeholder="last name"/>
                                    </Form.Group>
                                    <Form.Group controlId="birthDate">
                                        <Form.Label>birthDate</Form.Label>
                                        <Form.Control type="date" name="birthDate" placeholder="birth date"/>
                                    </Form.Group>
                                    <Form.Group controlId="gender">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control type="text" name="gender" placeholder="Gender (M or F)"/>
                                    </Form.Group>
                                    <Form.Group controlId="phoneNumber">
                                        <Form.Label>Phone number</Form.Label>
                                        <Form.Control type="text" name="phoneNumber" placeholder="Phone number"/>
                                    </Form.Group>
                                    <Form.Group controlId="country">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control type="text" name="country" placeholder="country"/>
                                    </Form.Group>
                                    <Form.Group controlId="city">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type="text" name="city" placeholder="city"/>
                                    </Form.Group>
                                    <Form.Group controlId="street">
                                        <Form.Label>Street</Form.Label>
                                        <Form.Control type="text" name="street" placeholder="Street"/>
                                    </Form.Group>
                                    <Form.Group controlId="address">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" name="address" placeholder="Address (Building number etc)"/>
                                    </Form.Group>
                                    <Form.Group controlId="zipCode">
                                        <Form.Label>ZIP code</Form.Label>
                                        <Form.Control type="text" name="zipCode" placeholder="ZIP code"/>
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