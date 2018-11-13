import React from 'react';
import propTypes from 'prop-types';
import {injectIntl, intlShape} from 'react-intl';
import {withStyles} from '@material-ui/core/styles';

// UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
    root: {},
    flex: {
        flex: 1
    }
});

const Header = (props) => {
    const {classes, intl} = props;

    return (
        <AppBar position="fixed" color="primary">
            <Toolbar>
                <Typography className={classes.flex}>
                    {intl.formatMessage({id: 'header'})}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

Header.propTypes = {
    classes: propTypes.object.isRequired,
    intl: intlShape.isRequired
};

Header.defaultProps = {};

export default injectIntl(withStyles(styles)(Header));
