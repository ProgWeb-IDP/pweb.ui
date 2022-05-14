import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {UpdateRoleModal} from '../modals/UpdateRoleModal';

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
        let updateModalClose=() => this.setState({updateModalShow:false});
        return (
            <div className='volunteers'>
                <div>
                    <Table className="mt-4" striped border hover size="sm">
                            <tr>
                                <th>user Id</th>
                                <th>firstName</th>
                                <th>lastName</th>
                                <th>Role</th>
                                <th>Options</th>
                            </tr>
                        <tbody>
                            {
                                volunteers.map(volunteer =>
                                    <tr>
                                        <td>{volunteer.userId}</td>
                                        <td>{volunteer.firstName}</td>
                                        <td>{volunteer.lastName}</td>
                                        <td>{volunteer.role}</td>
                                        <td>
                                            <button onClick={() => this.RemoveVolunteer(volunteer.userId)}>
                                                Remove volunteer
                                            </button>
                                            <button onClick={() => this.RemoveVolunteer(volunteer.userId)}>
                                                Change role #TODO
                                            </button>

                                            <ButtonToolbar>
                                                <Button variant='primary' onClick={() => this.setState({updateModalShow:true})}>
                                                Add location
                                                </Button>
                                                <UpdateRoleModal state={{volunteer_id : volunteer.userId}} show={this.state.updateModalShow} onHide={updateModalClose}/>
                                            </ButtonToolbar>



                                        </td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default Volunteers;