import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {AddLocationModal} from '../modals/AddLocationModal';

class Locations extends Component {
    constructor(props) {
        super(props)
        this.state={locations:[], addModalShow: false}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API + 'locations')
        .then(response => response.json())
        .then(data => {
            this.setState({locations:data})
        });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {

        const {locations}=this.state;
        let flag = locations.length;
        let addModalClose=() => this.setState({addModalShow:false});
        return (
            (flag === 0) ? (<div className='locations'>
                <div>
                    <h2>There are 0 locations.</h2>
                    <ButtonToolbar>
                        <Button variant='primary' onClick={() => this.setState({addModalShow:true})}>
                            Add location
                        </Button>
                        <AddLocationModal show={this.state.addModalShow} onHide={addModalClose}/>
                    </ButtonToolbar>
                </div>
            </div>
            ) : (
                <div className='locations'>
                    <div>
                    <h2>{locations.length} {(locations.length === 1) ? ("location") : ("locations")}</h2>
                        <Table className="mt-4" striped border hover size="sm">
                                <tr>
                                    <th>Location name</th>
                                </tr>
                            <tbody>
                                {
                                    locations.map(location =>
                                        <tr>
                                            <td>{location.locationName}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                        <ButtonToolbar>
                            <Button variant='primary' onClick={() => this.setState({addModalShow:true})}>
                                Add location
                            </Button>
                        <AddLocationModal show={this.state.addModalShow} onHide={addModalClose}/>
                    </ButtonToolbar>
                    </div>
                </div>
            )
        );
    }
}

export default Locations;