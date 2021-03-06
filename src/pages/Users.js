import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

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
        // let addModalClose=() => this.setState({addModalShow:false});
        return (
           <div className='test_class'>
                <div>
                    <h2>{users.length} {(users.length === 1) ? ("User") : ("Users")}</h2>
                    <Table className="mt-4" striped border hover size="sm" responsive>
                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Volunteer</th>
                                <th>Donations</th>
                            </tr>
                        <tbody>
                            {
                                users.map(user =>
                                    <tr>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{(user.isVolunteer === 1 ? "Yes" : "NO")}</td>
                                        <td>{(user.numberOfDonations)}</td>
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