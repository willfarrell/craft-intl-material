import React from 'react';
import propTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';
import {withStyles} from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const styles = () => ({
    root: {}
});

const Home = (props) => {
    const {classes, intl} = props;

    return (<div>
        <Typography type="display4" className={classes.title}>
            {intl.formatMessage({id: 'title'})} {intl.formatMessage({ id: 'header' })}
        </Typography>
    </div>);
};

Home.propTypes = {
    classes: propTypes.object.isRequired,
    intl: intlShape.isRequired
};

export default injectIntl(withStyles(styles)(Home));
