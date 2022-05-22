import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
// import {UpdateRoleModal} from '../modals/UpdateRoleModal';

class Volunteers extends Component {
    constructor(props) {
        super(props)
        this.state={volunteers:[], updateModalShow:false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API + 'volunteer')
        .then(response => response.json())
        .then(data => {
            this.setState({volunteers:data})
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    RemoveVolunteer(userID) {
        fetch(process.env.REACT_APP_API + 'volunteer/' + userID, {method : 'DELETE'})
        .then(result => result.json())
        .then((result) => {
            alert(result);
        },
        (error) => {
            alert("Failed to remove volunteer!");
        })
    }

    render() {
        const {volunteers}=this.state;
        let flag = volunteers.length;
        return (
            (flag === 0) ? (<div className='volunteers_none'><h2>THERE ARE NO VOLUNTEERS YET!</h2></div>) : (
                <div className='volunteers'>
                    <div>
                        <Table className="mt-4" striped border hover size="sm">
                                <tr>
                                    <th>First name</th>
                                    <th>Last name</th>
                                    <th>Role</th>
                                    <th>Location</th>
                                    <th>Options</th>
                                </tr>
                            <tbody>
                                {
                                    volunteers.map(volunteer =>
                                        <tr>
                                            <td>{volunteer.firstName}</td>
                                            <td>{volunteer.lastName}</td>
                                            <td>{volunteer.roleName}</td>
                                            <td>{volunteer.locationName}</td>
                                            <td>
                                            <ButtonToolbar>
                                                <Button className="mr-2" variant="danger" size="sm" onClick={() => this.RemoveVolunteer(volunteer.userId)}>
                                                    Remove volunteer
                                                </Button>
                                            </ButtonToolbar>
                                                {/* <ButtonToolbar>
                                                    <Button variant='primary' onClick={() => this.setState({updateModalShow:true})}>
                                                    Add volunteer
                                                    </Button>
                                                    <UpdateRoleModal state={{volunteer_id : volunteer.userId}} show={this.state.updateModalShow} onHide={updateModalClose}/>
                                                </ButtonToolbar> */}
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            )
        );
    }
}

export default Volunteers;