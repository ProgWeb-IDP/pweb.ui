import React, {Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

class AddUserModal extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName:event.target.firstName.value,
                lastName:event.target.lastName.value
            })
        })
        .then(result => result.json())
        .then((result) => {
            alert(result);
        },
        (error) => {
            alert("Failed to add a user.");
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
                            Add user
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="firstName">
                                        <Form.Label>firstName</Form.Label>
                                        <Form.Control type="text" name="firstName" required placeholder="first name"/>
                                    </Form.Group>
                                    <Form.Group controlId="lastName">
                                        <Form.Label>lastName</Form.Label>
                                        <Form.Control type="text" name="lastName" required placeholder="last name"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add user
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

export default AddUserModal;