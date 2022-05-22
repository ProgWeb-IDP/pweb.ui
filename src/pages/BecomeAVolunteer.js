import React, {Component} from 'react';
// import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import ApplyVolunteerModal from '../modals/ApplyVolunteerModal';
import { withAuth0 } from '@auth0/auth0-react';

class BecomeAVolunteer extends Component {
    constructor(props) {
        super(props)
        this.state={applications:[], applyModalShow: false}
        const {user} = this.props.auth0;
        this.account = null;
        this.hasApp = false;
        fetch(process.env.REACT_APP_API + 'auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                authToken: user.sub
            })
        })
        .then(result => result.json())
        .then((result) => {
            this.account = result;
        });
        setTimeout(() => this.refreshList(), 200);
        
    }

    refreshList(){
        fetch(process.env.REACT_APP_API + 'volunteerapplication')
        .then(response => response.json())
        .then(data => {
            this.setState({applications:data})
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {

        const {applications}=this.state;
        let applyModalClose=() => this.setState({applyModalShow:false});
        //console.log(applications.filter(filter_app => filter_app.userId == 13).length);
        let check = false;
        if(this.account != null) 
        {
            if(applications.filter(filter_app => filter_app.userId === this.account[0].userId).length > 0)
            check = true;
        }
        if(!check)
        {
            return (
            <div className='become_a_volunteer'>
                <div>
                    <h3>You want to be a part of our volunteers team? Don't hesitate and complete the next form!</h3>
                    <ButtonToolbar>
                        <Button variant='primary' onClick={() => this.setState({applyModalShow:true})}>
                            Become a volunteer
                        </Button>
                        <ApplyVolunteerModal show={this.state.applyModalShow} onHide={applyModalClose}/>
                    </ButtonToolbar>
                </div>
            </div>
            );
        }
        else{
            return (
                <div className='become_a_volunteer'>
                    <div>
                        <h3>We received your volunteer application and we'll check it soon! Thank you!</h3>
                    </div>
                </div>
                );
        }
    }
}

export default withAuth0(BecomeAVolunteer);