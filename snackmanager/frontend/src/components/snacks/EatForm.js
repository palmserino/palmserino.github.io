import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class EatForm extends Component {
    state = {
        id: '',
        amount: '',
        satisfaction: '',
        location: '',
    }
    
    static propTypes = {
        addSnack: PropTypes.func.isRequired
    }

    // For non-dropdown state updates
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }


    onSubmit = e => {
        e.preventDefault();
        const { id, amount, satisfaction, location } = this.state ;
/*         const { name, price, store_name, quantity, type, total_cals, time_purchased } = this.state ;
        const snack = { name, price, store_name, quantity, type, total_cals, time_purchased };
        this.props.addSnack(snack); */

        // Clears form on submit 
        this.setState({
            id: '',
            amount: '',
            satisfaction: '',
            location: '',
        });
    };




    render() {
        const { id, amount, satisfaction, location, shared, finished, snack_or_meal } = this.state ;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2 className="d-flex justify-content-center">Add an 'Eat' to a Snack</h2>
                <p className="text-xs d-flex justify-content-center">
                    An "eat" is every time you eat a particular snack.
                </p>
                <form onSubmit={this.onSubmit}>
                <div className="row mt-2">
                    <div className="col">
                        <label>ID of the Snack</label>
                        <input
                        className="form-control"
                        type="text"
                        name="id"
                        onChange={this.onChange}
                        value={id}
                        />
                    </div>
                    <div className="col">
                        <label>Amount</label>
                        <input
                        className="form-control"
                        type="text"
                        name="amount"
                        onChange={this.onChange}
                        value={amount}
                        />
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col">
                        <label>Satisfaction</label>
                        <input
                        className="form-control"
                        type="number"
                        name="satisfaction"
                        onChange={this.onChange}
                        value={satisfaction}
                        />
                    </div>
                    <div className="col">
                        <label>Location</label>
                        <input
                        className="form-control"
                        type="text"
                        name="location"
                        onChange={this.onChange}
                        value={location}
                        />
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary">
                        Submit
                        </button>
                    </div>
                </div>
                </form>
            </div>
            
        )
    }

}

export default connect()(EatForm); 

// don't need map state to props hence null 
//export default connect(null, { addSnack })(Form) 