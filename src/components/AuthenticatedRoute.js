import React from 'react';
import propTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = (props) => {
    const { childProps, component, ...rest } = props;
    const C = component;
    return (<Route
        {...rest}
        render={props =>
            childProps.isAuthenticated
                ? <C {...props} {...childProps} />
                : <Redirect
                    to={`/login?redirect=${props.location.pathname}${props.location.search}`}
                />}
    />)
};

AuthenticatedRoute.propTypes = {
    component: propTypes.func.isRequired,
    childProps: propTypes.object.isRequired,
    location: propTypes.object
};

export default AuthenticatedRoute;
