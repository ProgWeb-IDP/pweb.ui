import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

class Analytics extends Component {
    constructor(props) {
        super(props)
        this.state={analytics:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API + 'analytics')
        .then(response => response.json())
        .then(data => {
            this.setState({analytics: data})
        })
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const {analytics} = this.state;
        return (
            <div className='analytics'>
                <h2>ANALYTICS</h2>
                <Table className="mt-4" striped border hover size="sm">
                <tbody>
                    {
                    analytics.map(test =>
                        <>
                            <tr><th>Number of users</th> <td> {test.numberOfUsers} </td></tr>
                            <tr><th>Number of volunteers</th> <td> {test.numberOfVolunteers} </td></tr>
                            <tr><th>Canceled/Rejected donations</th> <td> {test.canceledDonations} </td></tr>
                            <tr><th>Pending donations</th> <td> {test.pendingDonations} </td></tr>
                            <tr><th>Accepted donations</th> <td> {test.acceptedDonations} </td></tr>
                            <tr><th>Collected donations</th> <td> {test.collectedDonations} </td></tr>
                            <tr><th>Delivered donations</th> <td> {test.deliveredDonations} </td></tr>
                            <tr><th>Rejected donation requests</th> <td> {test.rejectedDonationRequests} </td></tr>
                            <tr><th>Pending donation requests</th> <td> {test.pendingDonationRequests} </td></tr>
                            <tr><th>Active donation requests</th> <td> {test.runningDonationRequests} </td></tr>
                            <tr><th>Completed donation requests</th> <td> {test.completedDonationRequests} </td></tr>
                            <tr><th>Total resources donated</th> <td> {test.totalResourcesDonated} </td></tr>
                            <tr><th>Average resources donated / user</th> <td> {test.averageResourcesDonatedPerUser} </td></tr>
                        </>
                    )
                    }
                </tbody>
                </Table>
            </div>
        );
    }
}

export default Analytics;
