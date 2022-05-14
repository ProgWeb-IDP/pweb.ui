import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import AddUserModal from '../modals/AddUserModal';

class Users extends Component {
    constructor(props) {
        super(props)
        this.state={users:[], addModalShow: false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API + 'users')
        .then(response => response.json())
        .then(data => {
            this.setState({users:data})
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {

        const {users}=this.state;
        let addModalClose=() => this.setState({addModalShow:false});
        return (
           <div className='test_class'>
                <div>
                    <Table className="mt-4" striped border hover size="sm" responsive>
                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Volunteer</th>
                                <th>Options</th>
                            </tr>
                        <tbody>
                            {
                                users.map(user =>
                                    <tr>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{(user.isVolunteer == 1 ? "Yes" : "NO")}</td>
                                        <td>Edit / Delete</td>
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

export default Users;