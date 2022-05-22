import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

class Administrators extends Component {
    constructor(props) {
        super(props)
        this.state={administrators:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API + 'admin')
        .then(response => response.json())
        .then(data => {
            this.setState({administrators:data})
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {

        const {administrators}=this.state;
 
        return (

            <div className='administrators'>
                <h2>{administrators.length} {(administrators.length === 1) ? ("Administrator") : ("Administrators")}</h2>
                <div>
                    <Table className="mt-4" striped border hover size="sm">
                            <tr>
                                <th>user Id</th>
                                <th>firstName</th>
                                <th>lastName</th>
                            </tr>
                        <tbody>
                            {
                                administrators.map(admin =>
                                    <tr>
                                        <td>{admin.userId}</td>
                                        <td>{admin.firstName}</td>
                                        <td>{admin.lastName}</td>
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

export default Administrators;