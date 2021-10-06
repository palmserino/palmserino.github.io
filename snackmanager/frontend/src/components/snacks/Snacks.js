import React, { Component, Fragment} from 'react';
import { connect } from 'react-redux';  
import PropTypes from 'prop-types'; 
import { getSnacks, deleteSnack, addSnack } from '../../actions/snacks'; 


export class Snacks extends Component {
    static propTypes = {
        snacks: PropTypes.array.isRequired,
        
        // best practice to enforce this 
        getSnacks: PropTypes.func.isRequired,
        deleteSnack: PropTypes.func.isRequired
    }

    // on component mount we make the API call
    // connect state to properties allows us to access getSnacks as a property of this
    componentDidMount() {
        this.props.getSnacks(); 
    }

    render() {
        return (
            <Fragment>
                <h2>Snacks</h2>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Store Name</th>
                            <th>Quantity</th>
                            <th>Type</th>
                            <th>Total Calories</th>
                            <th>Time Purchased</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.snacks.map(snack => (
                            <tr key={snack.id}>
                                <td>{snack.id}</td>
                                <td>{snack.name}</td>
                                <td>{snack.price}</td>
                                <td>{snack.store_name}</td>
                                <td>{snack.quantity}</td>
                                <td>{snack.type}</td>
                                <td>{snack.total_cals}</td>
                                <td>{snack.time_purchased}</td>
                                <td><button onClick={this.props.deleteSnack.bind(this, snack.id)} 
                                    className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        );
    }

}

// map the redux state to the props of this component 
const mapStateToProps = state => ({
    snacks: state.snacks.snacks
});

// adds the GET request function as a property 
export default connect(mapStateToProps, { getSnacks, deleteSnack, addSnack })(Snacks);