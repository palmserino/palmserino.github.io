import React, { Component, Fragment} from 'react';
import { connect } from 'react-redux';  
import PropTypes from 'prop-types'; 
import { getSnacks } from '../../actions/snacks'; 


export class Snacks extends Component {
    static propTypes = {
        snacks: PropTypes.array.isRequired
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
                            <th>Item</th>
                            <th>Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.snacks.map(snack => (
                            <tr key={snack.id}>
                                <td>{snack.id}</td>
                                <td>{snack.name}</td>
                                <td>{snack.item}</td>
                                <td>{snack.done}</td>
                                <td><button className="btn btn-danger btn-sm">Delete</button></td>
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
export default connect(mapStateToProps, { getSnacks })(Snacks);