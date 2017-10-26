import { createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/createPalette';
import { indigo, pink, red, grey } from 'material-ui/colors';

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
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',   // default
    fontSize: '1.0rem', // 14px
    display4: {

    },
    display3: {

    },
    display2: {

    },
    display1: {

    },
    headline: {

    },
    title: {

    },
    subheading: {

    },
    body2: {

    },
    body1: {

    }
};

const theme = createMuiTheme({
    // material-ui
    palette: palette,
    typography: typography,
    overrides: {}
});

export default theme;
