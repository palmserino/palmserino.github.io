import React, { Fragment, Component } from 'react';
import EatForm from './EatForm';
import { connect } from 'react-redux';  
import PropTypes from 'prop-types'; 
import { getEats } from '../../actions/snacks'; 

export class Eat extends Component {
    static propTypes = {
        eats: PropTypes.array.isRequired,
        
        // best practice to enforce this 
        getEats: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getEats(); 
    }

    render() {
        return (
            <Fragment>
                <EatForm />
                <h2>All Eats</h2>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Amount</th>
                            <th>Satisfaction</th>
                            <th>Location</th>
                            <th>Shared</th>
                            <th>Finished</th>
                            <th>Snack or Meal?</th>   
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.eats.map(eat => (
                            <tr key={eat.id}>
                                <td>{eat.id}</td>
                                <td>{eat.amount}</td>
                                <td>{eat.satisfaction}</td>
                                <td>{eat.location}</td>
                                <td>{eat.shared}</td>
                                <td>{eat.finished}</td>
                                <td>{eat.snack_or_meal}</td>   
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}


// map the redux state to the props of this component 
const mapStateToProps = state => ({
    eats: state.eats.eats
});

// adds the GET request function as a property 
export default connect(mapStateToProps, { getEats })(Eat);
