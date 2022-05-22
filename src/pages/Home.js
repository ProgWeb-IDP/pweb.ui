import React, {Component} from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
// function Home() {
//     return (
//         <div className='analytics'>
//             <h1>Home</h1>
//         </div>
//     );
// }

// export default Home;

class Home extends Component {
    constructor(props) {
        super(props)
        this.state={account:[]}
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
        const {user} = this.props.auth0;
        var token = user.sub;
        const {account} = this.state;
        var name = "no_name";
        var isVolunteer = 0;
        var isAdmin = 0;
        account.map(det => (det.authToken === token) ? ((det.firstName && det.lastName) ? (name = det.firstName + " " + det.lastName) : (name = user.nickname)) : null)
        account.map(det => (det.authToken === token) ? ((det.isVolunteer) ? (isVolunteer = 1) : (isVolunteer = 0)) : null)
        account.map(det => (det.authToken === token) ? ((det.isAdmin) ? (isAdmin = 1) : (isAdmin = 0)) : null)
        return (
            <div className='profile'>
                <div>
                    <h2>Hello, {name}.</h2>
                    {
                        (isAdmin === 1) ? (<div><h2>You are an administrator, congrats!</h2><h2>Let's get the things done!</h2></div>) : (
                            (isVolunteer === 1) ? 
                            (<div><h2>We are glad that you are with us in this mission! YOU ROCK!</h2><h2>Let's get the things done!</h2></div>) :
                            (
                                <div>
                                <h2>Don't hesitate, join our campaign! Help a refugee with a donation or become a volunteer!</h2>
                                <Button variant='success' onClick={() => null}>
                                    <Link style={{ textDecoration: 'none', color: 'white' }} to='/donate'>Donate</Link>
                                </Button>
                                <Button variant='primary' onClick={() => null}>
                                    <Link style={{ textDecoration: 'none', color: 'white' }} to='/become_a_volunteer'>Become a volunteer</Link>
                                </Button>
                                </div>
                            )
                        )
                    }
                </div> 
            </div>
        );
    }
}

export default withAuth0(Home);