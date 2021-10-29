import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';  
import PropTypes from 'prop-types'; 
import { getEats, addEat, deleteEat } from '../../actions/eats'; 

export class Eats extends Component {
    static propTypes = {
        eats: PropTypes.array.isRequired,
        getEats: PropTypes.func.isRequired,
        addEat: PropTypes.func.isRequired,
        deleteEat: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getEats(); 
    }

    render() {
        return (
            <Fragment>
                <h2>All Eats</h2>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Amount</th>
                            <th>Satisfaction</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.eats.map(eat => (
                            <tr key={eat.id}>
                                <td>{eat.id}</td>
                                <td>{eat.amount}</td>
                                <td>{eat.satisfaction}</td>
                                <td>{eat.location}</td>
                                <td><button onClick={this.props.deleteEat.bind(this, eat.id)} 
                                    className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                            
                        )) }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}


// map the redux state to the props of this component 
// state.eats.eats comes from the reducer (b/c the reducer LIVES in the state)
const mapStateToProps = state => ({
    eats: state.eats.eats
});

// adds the GET request function as a property 
export default connect(mapStateToProps, { getEats, deleteEat, addEat })(Eats);
