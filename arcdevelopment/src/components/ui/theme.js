import { createTheme } from '@material-ui/core/styles';

//common colors used throughout
const arcBlue = "#0d72bb";
const arcOrange = "#FFBA60";
export default createTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`,
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        h3: {
            fontWeight: 300
        }
    }
})