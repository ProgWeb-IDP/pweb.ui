import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import AddProfileModal from '../modals/AddProfileModal';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state={account:[], addModalShow: false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API + 'users')
        .then(response => response.json())
        .then(data => {
            this.setState({account:data})
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const {user}=this.props.auth0;
        var token = user.sub;
        const {account}=this.state;
        let addModalClose=() => this.setState({addModalShow:false});
        return (
            <div className='profile'>
                <div>
                    <Table className="mt-4" striped border hover size="sm">
                            {/* <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Auth CODE</th>
                                <th>Birth date</th>
                                <th>Gender</th>
                                <th>Phone number</th>
                                <th>Country</th>
                                <th>City</th>
                                <th>Street</th>
                                <th>Address</th>
                                <th>ZIP code</th>
                            </tr> */}
                        <tbody>
                            {
                                account.map(details => (details.authToken === token) ? (
                                    <div>

                                            <tr><th>First name</th> <td>{details.firstName}</td></tr>
                                            <tr><th>Last name</th> <td>{details.lastName}</td></tr>
                                            {/* <tr><th>Auth CODE</th><td>{details.authToken}</td></tr> */}
                                            <tr><th>Birth date</th> <td>{details.birthDate}</td></tr>
                                            <tr><th>Gender</th> <td>{details.gender}</td></tr>
                                            <tr><th>Phone number</th><td>{details.phoneNumber}</td></tr>
                                            <tr><th>Country</th> <td>{details.country}</td></tr>
                                            <tr><th>City</th> <td>{details.city}</td></tr>
                                            <tr><th>Street</th> <td>{details.street}</td> </tr>
                                            <tr><th>Address</th> <td>{details.address}</td></tr>
                                            <tr><th>ZIP code</th> <td>{details.zipCode}</td></tr>

                                   </div>
                                        ) : null
                                    )
                            }
                        </tbody>
                    </Table>
                    <ButtonToolbar>
                        <Button variant='primary' onClick={() => this.setState({addModalShow:true})}>
                            Configure profile details 
                        </Button>
                        <AddProfileModal show={this.state.addModalShow} onHide={addModalClose}/>
                    </ButtonToolbar>
                </div>
            </div>
        );
    }
}

export default withAuth0(Profile);


/*
import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import AddProfileModal from '../modals/AddProfileModal';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state={account:[], addModalShow: false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API + 'users')
        .then(response => response.json())
        .then(data => {
            this.setState({account:data})
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const {user}=this.props.auth0;
        var token = user.sub;
        const {account}=this.state;
        let addModalClose=() => this.setState({addModalShow:false});
        return (
            <div className='profile'>
                <div>
                    <Table className="mt-4" striped border hover size="sm">
                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Auth CODE</th>
                                <th>Birth date</th>
                                <th>Gender</th>
                                <th>Phone number</th>
                                <th>Country</th>
                                <th>City</th>
                                <th>Street</th>
                                <th>Address</th>
                                <th>ZIP code</th>
                            </tr>
                        <tbody>
                            {
                                account.map(details => 
                                        <tr>
                                            <td>{details.firstName}</td>
                                            <td>{details.lastName}</td>
                                            <td>{details.authToken}</td>
                                            <td>{details.birthDate}</td>
                                            <td>{details.gender}</td>
                                            <td>{details.phoneNumber}</td>
                                            <td>{details.country}</td>
                                            <td>{details.city}</td>
                                            <td>{details.street}</td> 
                                            <td>{details.address}</td>
                                            <td>{details.zipCode}</td>
                                        </tr>
                                    )
                            }
                        </tbody>
                    </Table>
                    <ButtonToolbar>
                        <Button variant='primary' onClick={() => this.setState({addModalShow:true})}>
                            Configure profile details 
                        </Button>
                        <AddProfileModal show={this.state.addModalShow} onHide={addModalClose}/>
                    </ButtonToolbar>
                </div>
            </div>
        );
    }
}

export default withAuth0(Profile);

*/