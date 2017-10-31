import React from 'react';
import PropTypes from 'prop-types';
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
    component: PropTypes.func.isRequired,
    childProps: PropTypes.object.isRequired,
    location: PropTypes.object
};

export default AuthenticatedRoute;
