import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    // when we get a new prop (such as an error), this will run
    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;

        if(error !== prevProps.error ) { // if the error prop type is diff from the previous

            // possible error types and grab err msg 

            if(error.msg.name) {
                alert.error(`Name: ${error.msg.name.join()}`);
            }
            if(error.msg.item) {
                alert.error(`Item: ${error.msg.item.join()}`);
            }
            if(error.msg.done) {
                alert.error(`Done: ${error.msg.done.join()}`);
            }
            if(error.msg.non_field_errors) {
                alert.error(error.msg.non_field_errors.join());
            }
            
        }

        if(message !== prevProps.message) {
            if(message.deleteSnack) {
                alert.success(message.deleteSnack);
            }
            if(message.addSnack) {
                alert.success(message.addSnack);
            }

        }


    }
    
    render() {
        return <Fragment />;
    }
}

const mapStateToProps = state => ({
    error: state.errors, // any errors in the state become props with error as the prop type 
    message: state.messages 
});

export default connect(mapStateToProps)(withAlert()(Alerts)); 