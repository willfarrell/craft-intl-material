import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const AppliedRoute = (props) => {
    const { childProps, component, ...rest } = props;
    const C = component;
    return (<Route {...rest} render={props => <C {...props} {...childProps} />} />)
};

AppliedRoute.PropTypes = {
    component: PropTypes.func.isRequired,
    childProps: PropTypes.object.isRequired
};

export default AppliedRoute;
