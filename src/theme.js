import { createMuiTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import { indigo, pink, red, grey } from '@material-ui/core/colors';

import 'typeface-roboto';

// https://material-ui-1dab0.firebaseapp.com/customization/themes/#customizing-all-instances-of-a-component-type
// https://material-ui-1dab0.firebaseapp.com/style/color/

const palette = createPalette({
    type: 'light',
    primary: {
        ...indigo
    },
    secondary: {
        ...pink
    },
    error: {
        ...red
    },
    grey: {
        ...grey
    }
});

const typography = {
    useNextVariants: true,  // https://material-ui.com/style/typography/#migration-to-typography-v2
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',   // default
    fontSize: '1.0rem', // 14px
    h1: {

    },
    h2: {

    },
    h3: {

    },
    h4: {

    },
    h5: {

    },
    h6: {

    },
    subtitle1: {

    },
    body1: {

    },
    body2: {

    }
};

const theme = createMuiTheme({
    // material-ui
    palette: palette,
    typography: typography,
    overrides: {}
});

export default theme;
