import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSnack } from '../../actions/snacks';
import Select from 'react-select';

// choices for dropdown (same as model choices)
const option = [
    {value: 'sweet', label: 'Sweet'},
    {value: 'savory', label: 'Savory'},
    {value: 'sour', label: 'Sour'}
  ]

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

    // For non-dropdown state updates
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    // Handles changes to state from dropdowns
    changeHandler = e => {
        this.setState({ type: e ? e.value : '' });
      };

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
                <h2 className="d-flex justify-content-center">Add Snack Purchase</h2>
                <form onSubmit={this.onSubmit}>
                <div className="row mt-2">
                    <div className="col">
                        <label>Name</label>
                        <input
                        className="form-control"
                        type="text"
                        name="name"
                        onChange={this.onChange}
                        value={name}
                        />
                    </div>
                    <div className="col">
                        <label>Type</label>
                        <Select
                            name="type"
                            value={option.find(item => item.value === type)}
                            onChange={this.changeHandler}
                            options={option}
                        />
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col">
                            <label>Quantity</label>
                            <input
                            className="form-control"
                            type="number"
                            name="quantity"
                            onChange={this.onChange}
                            value={quantity}
                            />
                    </div>
                    <div className="col">
                        <label>Price / unit</label>
                        <input
                        className="form-control"
                        type="text"
                        name="price"
                        onChange={this.onChange}
                        value={price}
                        />
                    </div>
                    <div className="col">
                        <label>Calories / unit</label>
                        <input
                        className="form-control"
                        type="number"
                        name="total_cals"
                        onChange={this.onChange}
                        value={total_cals}
                        />
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col">
                        <label >Where did you buy this snack?</label>
                        <input
                        className="form-control "
                        type="text"
                        name="store_name"
                        onChange={this.onChange}
                        value={store_name}
                        />
                    </div>

                    <div className="col">
                        <label>Time Purchased</label>
                        <input
                        className="form-control"
                        type="datetime-local"
                        name="time_purchased"
                        onChange={this.onChange}
                        value={time_purchased}
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

// don't need map state to props hence null 
export default connect(null, { addSnack })(Form) 