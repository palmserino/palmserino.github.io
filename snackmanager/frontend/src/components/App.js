import React, { Component, Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import PurchaseDashboard from './snacks/PurchaseDashboard';
import EatDashboard from './eats/EatDashboard';
import Alerts from './layout/Alerts';

// these components are rendered on new pages using routes
import Login from './accounts/Login';
import Register from './accounts/Register';

// used to verify authentication before displaying snack data 
import PrivateRoute from './common/PrivateRoute';

import { Provider } from 'react-redux'; // provider connects react to redux 
import store from '../store'; 
import { loadUser } from '../actions/auth';

const GlobalStyle = createGlobalStyle`
   @import url("https://fonts.googleapis.com/css?family=Quicksand");
   body {
      color: red;
   }
`

// Alert Options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component {
    // whenever our app laods 
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <GlobalStyle />
                            <Header />
                            <Alerts />
                            <div className='container'>
                                <Switch>
                                    <PrivateRoute exact path="/" component={PurchaseDashboard} />
                                    <PrivateRoute exact path="/eat" component={EatDashboard} />
                                    <Route exact path="/register" component={Register} />
                                    <Route exact path="/login" component={Login} />
                                </Switch>
                                
                            </div>
                        </Fragment>  
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'))