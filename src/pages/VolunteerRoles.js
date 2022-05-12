import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddVolunteerRolesModal} from '../modals/AddVolunteerRolesModal';

class VolunteerRoles extends Component {
    constructor(props) {
        super(props)
        this.state={roles:[], addModalShow: false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API + 'volunteerroles')
        .then(response => response.json())
        .then(data => {
            this.setState({roles:data})
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {

        const {roles}=this.state;
        let addModalClose=() => this.setState({addModalShow:false});
        return (
            <div className='test_class'>
                <div>
                    <Table className="mt-4" striped border hover size="sm">
                            <tr>
                                <th>volunteerRoleId</th>
                                <th>volunteerRoleName</th>
                                <th>shortDescription</th>
                            </tr>
                        <tbody>
                            {
                                roles.map(role =>
                                    <tr>
                                        <td>{role.roleId}</td>
                                        <td>{role.roleName}</td>
                                        <td>{role.shortDescription}</td>
                                    </tr>
                                    )
                            }
                        </tbody>
                    </Table>
                    <ButtonToolbar>
                        <Button variant='primary' onClick={() => this.setState({addModalShow:true})}>
                            Add volunteer role
                        </Button>
                        <AddVolunteerRolesModal show={this.state.addModalShow} onHide={addModalClose}/>
                    </ButtonToolbar>
                </div>
            </div>
        );
        
    }
}

export default VolunteerRoles;