import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

class RUBEN extends Component {
    constructor(props) {
        super(props)
        this.state={users:[]}
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
        console.log("state");
        console.log(this.state);
        return (
            <div className='test_class'>

                <div>
                    <Table className="mt-4" striped border hover size="sm">
                        <thread>
                            <tr>
                                <th>userId</th>
                                <th>firstName</th>
                                <th>lastName</th>
                            </tr>
                        </thread>
                        <tbody>
                            {
                                users.map(user =>
                                    <tr>
                                        <td>{user.userId}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
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

export default RUBEN;