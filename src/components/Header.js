import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { withStyles } from 'material-ui/styles';

// UI
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = () => ({
    root: {},
    flex: {
        flex: 1
    }
});

const Header = (props) => {
    const { classes, intl } = props;

    return (
        <div className={classes.root}>
            <Toolbar>
                <Typography className={classes.flex}>
                    {intl.formatMessage({ id: 'header' })}
                </Typography>
            </Toolbar>
        </div>
    );
};

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    intl: intlShape.isRequired
};

Header.defaultProps = {};

export default injectIntl(withStyles(styles)(Header));
