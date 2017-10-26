import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

function querystring (name, url = window.location.href) {
    name = name.replace(/[[]]/g, "\\$&");

    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)', 'i');
    const results = regex.exec(url);

    if (!results) {
        return null;
    }
    if (!results[2]) {
        return "";
    }

    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const UnauthenticatedRoute = (props) => {
    const { childProps, component, ...rest } = props;
    const C = component;
    const redirect = querystring('redirect');
    return (<Route
        {...rest}
        render={props =>
            !childProps.isAuthenticated
                ? <C {...props} {...childProps} />
                : <Redirect
                    to={redirect === '' || redirect === null ? '/' : redirect}
                />}
    />)
};

UnauthenticatedRoute.propTypes = {
    component: PropTypes.func.isRequired,
    childProps: PropTypes.object.isRequired
};

export default UnauthenticatedRoute;
