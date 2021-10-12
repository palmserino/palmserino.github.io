import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSnack } from '../../actions/snacks';
import Select from 'react-select';
import Eat from './Eat';

// choices for dropdown (same as model choices)
const option = [
    {value: 'sweet', label: 'Sweet'},
    {value: 'savory', label: 'Savory'},
    {value: 'sour', label: 'Sour'},
  ]

export class EatForm extends Component {
    render() {
        return (
            <div className="card card-body mt-4 mb-4">
                <h2 className="d-flex justify-content-center">Add an 'Eat' to a Snack</h2>
                <p className="text-xs d-flex justify-content-center">
                    An "eat" is every time you eat a particular snack.
                </p>
            </div>
        )
    }

}

export default EatForm; 

// don't need map state to props hence null 
//export default connect(null, { addSnack })(Form) 