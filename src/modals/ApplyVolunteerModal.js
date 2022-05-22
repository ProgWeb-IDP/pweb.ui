import React, {Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class ApplyVolunteerModal extends Component {
    constructor(props) {
        super(props)
        this.state={locations:[], roles:[]}
        this.flag = 0;
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

    refreshList(){
        if (this.flag === 0) {
            fetch(process.env.REACT_APP_API + 'locations')
            .then(response => response.json())
            .then(data => {
                this.setState({locations:data})
            });
            fetch(process.env.REACT_APP_API + 'volunteerroles')
            .then(response => response.json())
            .then(data => {
                this.setState({roles:data})
            });
            this.flag = 1;
        }
    }

    createSelectItems() {
        const {locations} = this.state;
        let items = [];
        locations.map(loc => items.push(loc.locationName))

        return items;
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("rol: " + event.target.role.value);
        console.log("summary: " + event.target.summary.value);
        console.log("location: " + event.target.location.value);
        console.log("userid: " + this.account[0].userId);

        
        fetch(process.env.REACT_APP_API + 'volunteerapplication', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                roleId: event.target.role.value,
                summary: event.target.summary.value,
                locationId: event.target.location.value,
                userId: this.account[0].userId
            })
        })
        .then(result => result.json())
        .then((result) => {
            alert("Volunteer application created!");
        },
        (error) => {
            alert("Failed to create volunteer application.");
        })
        
    }

    render() {
        const {locations, roles} = this.state;
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
                            Volunteer application
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="role">
                                        <Form.Label>Role</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                        {   
                                            roles.map(role => <option value={role.roleId}>{role.roleName}</option>)
                                        }
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group controlId="location">
                                        <Form.Label>Location</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                        {   
                                            locations.map(location => <option value={location.locationId}>{location.locationName}</option>)
                                        }
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group controlId="summary">
                                        <Form.Label>Summary</Form.Label>
                                        <Form.Control as="textarea" rows={5} type="text" name="summary" required placeholder="Summary"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Apply
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
export default withAuth0(ApplyVolunteerModal);