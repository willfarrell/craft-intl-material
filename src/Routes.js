import React from 'react';
import propTypes from 'prop-types';

// routing
import {Route, Switch} from 'react-router-dom';
import asyncComponent from './components/AsyncComponent';
import AppliedRoute from './components/AppliedRoute';
//import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';

// pages
const AsyncHome = asyncComponent(() => import('./routes/Home'));
const AsyncLogin = asyncComponent(() => import('./routes/Login'));
const AsyncNotFound = asyncComponent(() => import('./routes/NotFound'));

const Routes = (props) => {
    const {childProps} = props;
    return (
        <Switch>
            <AppliedRoute path='/' exact component={AsyncHome} childProps={childProps}/>
            <UnauthenticatedRoute path='/login' exact component={AsyncLogin} childProps={childProps}/>
            {/*<AuthenticatedRoute path='/app' exact component={AsyncAppHome} childProps={childProps} />*/}
            <UnauthenticatedRoute component={AsyncNotFound} childProps={childProps} />
        </Switch>
    );
};

Routes.propTypes = {
    childProps: propTypes.object.isRequired
};

export default Routes;
