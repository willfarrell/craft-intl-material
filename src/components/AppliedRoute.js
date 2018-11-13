import React from 'react';
import propTypes from 'prop-types';
import { Route } from 'react-router-dom';

const AppliedRoute = (props) => {
    const { childProps, component, ...rest } = props;
    const C = component;
    return (<Route {...rest} render={props => <C {...props} {...childProps} />} />)
};

AppliedRoute.propTypes = {
    component: propTypes.func.isRequired,
    childProps: propTypes.object.isRequired
};

export default AppliedRoute;
