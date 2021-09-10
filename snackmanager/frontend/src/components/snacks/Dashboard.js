import React, { Fragment }from 'react';
import Form from './Form';
import Snacks from './Snacks';

export default function Dashboard() {
    return (
        <Fragment>
            <Form />
            <Snacks />
        </Fragment>
    )
}