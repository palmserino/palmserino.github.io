import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSnack } from '../../actions/snacks';

export class Form extends Component {
    state = {
        name: '',
        price: '',
        store_name: '',
        quantity: '',
        type: '',
        total_cals: '',
        time_purchased: ''
    }

    static propTypes = {
        addSnack: PropTypes.func.isRequired
    }

    // e for event
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { name, price, store_name, quantity, type, total_cals, time_purchased } = this.state ;
        const snack = { name, price, store_name, quantity, type, total_cals, time_purchased };
        this.props.addSnack(snack);

        // Clears form on submit 
        this.setState({
            name: '',
            price: '',
            store_name: '',
            quantity: '',
            type: '',
            total_cals: '',
            time_purchased: ''
        })
    }

    render() {
        const { name, price, store_name, quantity, type, total_cals, time_purchased } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Snack</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={this.onChange}
                    value={name}
                    />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <textarea
                    className="form-control"
                    type="text"
                    name="price"
                    onChange={this.onChange}
                    value={price}
                    />
                </div>
                <div className="form-group">
                    <label>Where did you buy this snack?</label>
                    <textarea
                    className="form-control"
                    type="text"
                    name="store_name"
                    onChange={this.onChange}
                    value={store_name}
                    />
                </div>
                <div className="form-group">
                    <label>Quantity</label>
                    <textarea
                    className="form-control"
                    type="text"
                    name="quantity"
                    onChange={this.onChange}
                    value={quantity}
                    />
                </div>
                <div className="form-group">
                    <label>Type</label>
                    <textarea
                    className="form-control"
                    type="text"
                    name="type"
                    onChange={this.onChange}
                    value={type}
                    />
                </div>
                <div className="form-group">
                    <label>Total Calories</label>
                    <textarea
                    className="form-control"
                    type="text"
                    name="total_cals"
                    onChange={this.onChange}
                    value={type}
                    />
                </div>
                <div className="form-group">
                    <label>Time Purchased</label>
                    <textarea
                    className="form-control"
                    type="text"
                    name="time_purchased"
                    onChange={this.onChange}
                    value={time_purchased}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
                </div>
                </form>
            </div>
        )
    }

}

// don't need map state to props hence null 
export default connect(null, { addSnack })(Form) 