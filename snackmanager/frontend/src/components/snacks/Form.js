import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSnack } from '../../actions/snacks';

export class Form extends Component {
    state = {
        name: '',
        item: '',
        done: '',
    }

    static propTypes = {
        addSnack: PropTypes.func.isRequired
    }

    // e for event
    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { name, item, done } = this.state ;
        const snack = { name, item, done};
        this.props.addSnack(snack)
    }

    render() {
        const { name, item, done } = this.state;
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
                    <label>Item</label>
                    <textarea
                    className="form-control"
                    type="text"
                    name="item"
                    onChange={this.onChange}
                    value={item}
                    />
                </div>
                <div className="form-group">
                    <label>Done</label>
                    <textarea
                    className="form-control"
                    type="text"
                    name="item"
                    onChange={this.onChange}
                    value={item}
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