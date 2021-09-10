import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Header from './layout/Header';
import Tmp from './layout/Tmp'

class App extends Component {
    render() {
        return (
            <Header/>,
            <h1>the method works</h1>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'))