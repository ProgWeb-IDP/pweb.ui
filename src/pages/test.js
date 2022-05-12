import React, {Component} from 'react';
// import {Table} from 'react-bootstrap';
// import {Button, ButtonToolbar} from 'react-bootstrap';
// import {AddUserModal} from '../modals/AddUserModal';

// class TEST extends Component {
//     constructor(props) {
//         super(props)
//         this.state={users:[], addModalShow: false}
//     }

//     refreshList(){
//         fetch(process.env.REACT_APP_API + 'users')
//         .then(response => response.json())
//         .then(data => {
//             this.setState({users:data})
//         });
//     }

//     componentDidMount() {
//         this.refreshList();
//     }

//     componentDidUpdate() {
//         this.refreshList();
//     }

//     render() {

//         const {users}=this.state;
//         let addModalClose=() => this.setState({addModalShow:false});
//         return (
//            <div className='test_class'>
//                 <div>
//                     <Table className="mt-4" striped border hover size="sm" responsive>
//                         <thread>
//                             <tr>
//                                 <th>userId</th>
//                                 <th>firstName</th>
//                                 <th>lastName</th>
//                                 <th>Options</th>
//                             </tr>
//                         </thread>
//                         <tbody>
//                             {
//                                 users.map(user =>
//                                     <tr>
//                                         <td>{user.userId}</td>
//                                         <td>{user.firstName}</td>
//                                         <td>{user.lastName}</td>
//                                         <td>Edit / Delete</td>
//                                     </tr>
//                                     )
//                             }
//                         </tbody>
//                     </Table>
//                     <ButtonToolbar>
//                         <Button variant='primary' onClick={() => this.setState({addModalShow:true})}>
//                             Add user
//                         </Button>
//                         <AddUserModal show={this.state.addModalShow} onHide={addModalClose}/>
//                     </ButtonToolbar>
//                 </div>
//             </div>
//         );
        
//     }
// }

import { useAuth0 } from "@auth0/auth0-react";

function TEST() {
    const { logout, user } = useAuth0();
    console.log('Acesta este user')
    console.log(user.sub)
    return (    
    <span>Nothing</span>
    );
}
export default TEST;